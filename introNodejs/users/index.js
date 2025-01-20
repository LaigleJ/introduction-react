import readline from 'readline/promises';
import fs from 'fs/promises';
import path from 'path'; // Pour manipuler les chemins de fichiers

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  try {
    const prenom = await rl.question('Quel est votre prénom ? ');
    const nom = await rl.question('Quel est votre nom ? ');
    const age = await rl.question('Quel est votre âge ? ');

    const message = `Bonjour ${prenom} ${nom}, vous avez ${age} ans.\n`;
    console.log(message);

    // Définir le chemin du fichier (chemin absolu pour éviter les confusions)
    const filePath = path.resolve('reponses.txt');

    // Enregistrer les réponses dans le fichier
    const data = `Prénom: ${prenom}\nNom: ${nom}\nÂge: ${age}\n`;
    await fs.writeFile(filePath, data);
    console.log(`Les réponses ont été enregistrées dans le fichier : ${filePath}`);
  } catch (error) {
    console.error('Une erreur est survenue :', error);
  } finally {
    rl.close();
  }
}

main();
