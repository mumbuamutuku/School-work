interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;    
};

const studentsList: Student[] = [
  {
    firstName: "Jaden",
    lastName: "Evans",
    age: 7,
    location: "New York",
  },
  {
    firstName: "Zemmira",
    lastName: "Ayuma",
    age: 8,
    location: "Los Angeles",
  },
];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
