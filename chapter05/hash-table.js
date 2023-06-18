const objetoEmails = {
  "João": "joao@example.com",
  "Maria": "maria@example.com",
  "Pedro": "pedro@example.com",
  "Ana": "ana@example.com",
  "Carlos": "carlos@example.com",
  "Mariana": "mariana@example.com",
  "Nome 95": "email95@example.com",
  "Nome 96": "email96@example.com",
  "Nome 97": "email97@example.com",
  "Nome 98": "email98@example.com",
  "Nome 99": "email99@example.com",
  "Nome 100": "email100@example.com",
  "Nome 101": "email101@example.com",
  "Nome 102": "email102@example.com",
  "Nome 103": "email103@example.com",
  "Nome 104": "email104@example.com",
  "Nome 105": "email105@example.com",
  "Nome 195": "email195@example.com",
  "Nome 196": "email196@example.com",
  "Nome 197": "email197@example.com",
  "Nome 198": "email198@example.com",
  "Nome 199": "email199@example.com",
  "Nome 200": "email200@example.com"
};

console.time('Searching in object - first')
console.log(objetoEmails["João"])
console.timeEnd('Searching in object - first')

console.time('Searching in object - middle')
console.log(objetoEmails["Nome 100"])
console.timeEnd('Searching in object - middle')

console.time('Searching in object - last')
console.log(objetoEmails["Nome 200"])
console.timeEnd('Searching in object - last')

const mapaEmails = new Map();

mapaEmails.set("João", "joao@example.com");
mapaEmails.set("Maria", "maria@example.com");
mapaEmails.set("Pedro", "pedro@example.com");
mapaEmails.set("Ana", "ana@example.com");
mapaEmails.set("Carlos", "carlos@example.com");
mapaEmails.set("Mariana", "mariana@example.com");
mapaEmails.set("Nome 973r", "email97@example.com");
mapaEmails.set("Nome 98234", "email98@example.com");
mapaEmails.set("Nome 94329", "email99@example.com");
mapaEmails.set("Nome 234234", "email100@example.com");
mapaEmails.set("Mariana", "mariana@example.com")
mapaEmails.set("Nome 95", "email95@example.com")
mapaEmails.set("Nome 96", "email96@example.com")
mapaEmails.set("Nome 97", "email97@example.com")
mapaEmails.set("Nome 98", "email98@example.com")
mapaEmails.set("Nome 99", "email99@example.com")
mapaEmails.set("Nome 100", "email100@example.com")
mapaEmails.set("Nome 101", "email101@example.com")
mapaEmails.set("Nome 102", "email102@example.com")
mapaEmails.set("Nome 103", "email103@example.com")
mapaEmails.set("Nome 104", "email104@example.com")
mapaEmails.set("Nome 105", "email105@example.com")
mapaEmails.set("Nome 195", "email195@example.com")
mapaEmails.set("Nome 196", "email196@example.com")
mapaEmails.set("Nome 197", "email197@example.com")
mapaEmails.set("Nome 198", "email198@example.com")
mapaEmails.set("Nome 199", "email199@example.com")
mapaEmails.set("Nome 200", "email200@example.com")

console.time('Searching in map - first')
console.log(mapaEmails.get("João"))
console.timeEnd('Searching in map - first')

console.time('Searching in map - middle')
console.log(mapaEmails.get("Nome 96"))
console.timeEnd('Searching in map - middle')

console.time('Searching in map - last')
console.log(mapaEmails.get("Nome 200"))
console.timeEnd('Searching in map - last')
