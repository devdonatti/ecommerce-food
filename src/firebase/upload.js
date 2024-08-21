import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta al archivo de credenciales de Firebase
const serviceAccountPath = path.join(__dirname, 'key', 'serviceAccountKey.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Inicializar la aplicación Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Ruta al archivo JSON que quieres subir
const jsonFilePath = path.join(__dirname, '..', 'components', 'data', 'data.json');

// Leer el archivo JSON
fs.readFile(jsonFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  const items = JSON.parse(data);

  // Asume que los documentos en JSON tienen una propiedad 'id' única
  // y una estructura como { id: 1, ...otherFields }
  const batch = db.batch();

  items.forEach(item => {
    const docRef = db.collection('productos').doc(item.id.toString());
    batch.set(docRef, item);
  });

  try {
    await batch.commit();
    console.log('Todos los documentos se subieron correctamente');
  } catch (error) {
    console.error('Error al subir documentos:', error);
  }
});
