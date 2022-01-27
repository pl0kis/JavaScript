let password = '12312____--';
password.length > 4 && (password.includes('-') || password.includes('_'))? console.log("Хороший пароль"): console.log("Плохой пароль")


let name = 'AnDrEy';
let first_name = 'KuzeNtsov'
console.log(name.toUpperCase())
console.log(first_name.toUpperCase())
console.log(name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase())
console.log(first_name.slice(0,1).toUpperCase() + first_name.slice(1).toLowerCase())