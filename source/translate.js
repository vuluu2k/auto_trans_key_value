
const translate = require('translate-google');
const fs = require('fs');
const path = require('path');

const translateText = async (text, targetLanguage) => {
  try {
    const translation = await translate(text, { to: targetLanguage });
    return translation;
  } catch (error) {
    console.error('Error translating text:', error);
    return text;
  }
};

const translateObject = async (obj, targetLanguage) => {
  const translatedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    console.log({key, value}, 'translated')
    if (typeof value === 'string') {
      translatedObj[key] = await translateText(value, targetLanguage);
    } else if (typeof value === 'object' && value !== null) {
      translatedObj[key] = await translateObject(value, targetLanguage);
    } else {
      translatedObj[key] = value;
    }
  }

  return translatedObj;
};

const translateFile = async (sourcePath, targetLanguage) => {
  try {
    const sourceContent = require(sourcePath);
    const translatedContent = await translateObject(sourceContent, targetLanguage);
    
    const outputPath = path.join(
      path.dirname(sourcePath),
      `${path.basename(sourcePath, '.js')}_${targetLanguage}.js`
    );

    const outputContent = `module.exports = ${JSON.stringify(translatedContent, null, 2)};
`;
    
    fs.writeFileSync(outputPath, outputContent);
    console.log(`Translation completed. Output saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error processing file:', error);
  }
};

module.exports = {
  translateFile
};