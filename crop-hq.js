const sharp = require('sharp');

const inputPath = 'raw-images/freepik__tire-o-cracha-do-jaleco-branco-dele-e-deixe-sem-na__2738.png';
const outputPath = 'public/hero/gorilla-cinematic-hero.png';

async function cropImage() {
    try {
        const metadata = await sharp(inputPath).metadata();

        // We cut 250px from the top in the previous step.
        const cropTop = 250;

        await sharp(inputPath)
            .extract({
                left: 0,
                top: cropTop,
                width: metadata.width,
                height: metadata.height - cropTop
            })
            // Outputting as PNG with adaptive filtering and max compression level (which is lossless for PNG) to retain highest quality possible
            .png({ compressionLevel: 9, adaptiveFiltering: true })
            .toFile(outputPath);

        console.log('High-quality image cropped successfully and saved to ' + outputPath);
    } catch (error) {
        console.error('Error cropping image:', error);
    }
}

cropImage();
