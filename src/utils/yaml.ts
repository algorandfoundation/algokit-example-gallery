import yaml from 'js-yaml'
import fs from "fs/promises";

/**
 * Read a YAML file and convert it to a JavaScript object
 * @param {string} filePath - Path to the YAML file
 * @returns {Promise<T>} Parsed YAML as a JavaScript object of type T
 */
export async function yamlToObject<T>(filePath: string): Promise<T> {
    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        return yaml.load(fileContents) as T;
    } catch (error) {
        console.error(`Error reading or parsing YAML file ${filePath}:`, error);
        throw error;
    }
}
  