const { rejects } = require('assert')
const fs = require('fs');
const { resolve } = require('path');


const countStudents = (dataPath) => new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'));
        }
        if (data) {
            const fileLines = data
              .toString('utf-8')
              .trim()
              .split('\n');
            const studentGroup = {};
            const dbFieldNames = fileLines[0].split(',');
            const studentPropNames = dbFieldNames
              .slice(0, dbFieldNames.length - 1);
            
            for (const line of fileLines.slice(1)) {
                const studentRecord = line.split(',');
                const studentPropValues = studentRecord
                  .slice(0, studentRecord.length -1);
                const field = studentRecord[studentRecord.length - 1];
                if (!Object.keys(studentGroup).includes(field)) {
                    studentGroup[field] = [];
                }
                const studentEntries = studentPropNames
                  .map((propName, idx) => [propName, studentPropValues[idx]]);
                studentGroup[field].push(Object.fromEntries(studentEntries));
            }

            const totalStudents = Object
              .values(studentGroup)
              .reduce((pre, cur) => (pre || []).length + cur.length);
            console.log(`Number of students: ${totalStudents}`);
            for (const [field, group] of Object.entries(studentGroup)) {
                const studentNames = group.map((student) => student.firstname).join(', ');
                console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
            }
            resolve(true);
        }
    });
});

module.exports = countStudents;