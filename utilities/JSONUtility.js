import fs from "fs/promises";
import path from "node:path";

class JsonUtility {

    async getDataFromJson(key) {
        let file = await fs.readFile(
            path.join(__dirname, "../TestData/data.json"),
            "utf-8"
        );

        let data=JSON.parse(file);
        return data[key];
    }

    async writeDataToJson(key, value) {
        let file = await fs.readFile(
            path.join(__dirname, "../TestData/data.json"),
            "utf-8"
        );

        let data=JSON.parse(file);

        data[key] = value;

        await fs.writeFile(
            path.join(__dirname, "../TestData/data.json"),
            JSON.stringify(data, null, 2)
        );
    }
}

export default JsonUtility;