const barcos = [
	{
		nombre:"Bar Quito",
		eslora:"Eslora: 5",
		tripulantes:"Tripulantes: 4",
		tipo:"Tipo: Recreativo",
		img:"./img/barco1.jpg"
	},
	{
		nombre:"Imperioso",
		eslora:"Eslora: 25",
		tripulantes:"Tripulantes: 2",
		tipo:"Tipo: Recreativo",
		img:"./img/barco2.jpg"
	},
	{
		nombre:"Yupsu",
		eslora:"Eslora: 20",
		tripulantes:"Tripulantes: 2",
		tipo:"Tipo: Recreativo",
		img:"./img/barco3.jpg"
	}
]

function createBarco(barco) {
	return `
	<div class="card">
		<div class="card-img">
			<img 
				src="${barco.img}" 
				alt="${barco.nombre}">
		</div>
			<h3>${barco.nombre}</h3>
			<p>${barco.eslora}</p>
			<p>${barco.tripulantes}</p>
			<p>${barco.tipo}</p>
		</div>
	`
}

const templates = barcos.map(barco => createBarco(barco))
const html = templates.join(' ')

document.querySelector('.list').innerHTML = html
