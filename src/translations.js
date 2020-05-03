const qualityMap = new Map();
qualityMap.set('good', 'καλή');
qualityMap.set('bad', 'κακή');

const pollutionMap = new Map();
pollutionMap.set('wastes', 'Ρύπανση από Στερεά Απόβλητα');
pollutionMap.set('pesticides', 'Ρύπανση από Φυτοφάρμακα');

const climateMap = new Map();
climateMap.set('desertification', 'Κίνδυνος Ερημοποίηση');
climateMap.set('flood', 'Κίνδυνος Πλημμύρα');
climateMap.set('fire', 'Κίνδυνος Πυρκαγίας');

const controlsMap = new Map();
controlsMap.set('erosion', 'Κίνδυνος Διάβρωση');
controlsMap.set('overgrazing', 'Υπερβόσκηση');
controlsMap.set('cement', 'Τάσεις Τσιμεντοποίηση');
controlsMap.set('pollution', 'Ρύπανση');
controlsMap.set('quality', 'Ποιότητα τόπου');
controlsMap.set('climate', 'Ακραία καιρικά φαινόμενα');

controlsMap.set('Google', 'Google');
controlsMap.set('Topomaps', 'Topomaps');
controlsMap.set('Loss', 'Forest Loss');

export { controlsMap, climateMap, pollutionMap, qualityMap };
