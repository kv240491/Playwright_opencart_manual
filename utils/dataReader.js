import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export class DataProvider {

    static readJson(filePath) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw);
    }

    static readCsv(filePath) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return parse(raw, {
            columns: true,
            skip_empty_lines: true
        });
    }

    static readExcel(filePath, sheetName = null) {

        const workbook = XLSX.readFile(filePath);

        const selectedSheet =
            sheetName || workbook.SheetNames[0];

        const worksheet =
            workbook.Sheets[selectedSheet];

        return XLSX.utils.sheet_to_json(worksheet);
    }
}