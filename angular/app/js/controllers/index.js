angular.module('scrum.controllers.index', [])

.controller('index#home', ['$scope','$rootScope','$sce', function ($scope, $rootScope, $sce) {
	console.log("index#home running")

	$scope.renderHtml = function(html_code){
		return $sce.trustAsHtml(html_code);
	};

	$scope.data =[
					{
						title: "Objeto de Aprendizaje de Scrum",
						subtitle: "Introducción",
						sections: [
										"<p>Este objeto de aprendizaje fue construido con la finalidad de entregar al usuario los conceptos basicos del marco de trabajo Scrum.</p>",
										"<p>Todo esto con la finalidad de facilitar el aprendizaje de este. Se busca con la aplicación de esta herramienta que el usuario obtenga una base suficiente para incorporarse en un equipo de trabajo que funcione bajo los conceptos de Scrum y tenga una base adecuada para su correcto desempeño.</p>",
										"<p>Ken Schwaber y Jeff Sutherland (autores de Scrum), definen Scrum como:<br><br><div class='col-sm-8 col-sm-offset-2'><em style='margin: 0 30px;'>“Un marco de trabajo por el cual las personas pueden acometer problemas complejos adaptativos, a la vez que entregar productos del máximo valor posible productiva y creativamente” .</em></div></p>",
									]
					},
					{
						title: "Introducción",
						subtitle: "Ciclo de Vida del Software",
						sections: [
										"obtener resultados rapidos adaptandose,iterativo e incremental,transparencia, inspeccion y revision,,concepto,especulacion,exploracion,revision,cierre,",
									]
					},
					{
						title: "Desarrollo Ágil de Software",
						subtitle: "Manifiesto Ágil",
						sections: [
										"<p>En 2001 se reunieron diecisiete críticos de los modelos de desarrollo de software basados en procesos, para tratar sobre técnicas y procesos para desarrollar software. Se acuñó el término “Métodos Ágiles” para definir a los métodos que surgen como alternativa a las metodologías formales (consideradas excesivamente “pesadas” y rígidas por su carácter normativo y fuerte dependencia de planificaciones detalladas previas al desarrollo).</p>",
										"<p>Los integrantes de la reunión resumieron los principios sobre los que se basan los métodos alternativos en cuatro postulados, los que forman el denominado Manifiesto Ágil, en él se expone que:</p>",
										"<pre><p>Estamos descubriendo formas mejores de desarrollar software tanto por nuestra propia experiencia como ayudando a terceros. A través de este trabajo hemos aprendido a valorar:</p><ul><li><strong style='font-size:15px;'>Individuos e interacciones</strong> sobre procesos y herramientas</li><li><strong style='font-size:15px;'>Software funcionando</strong> sobre documentación extensiva</li><li><strong style='font-size:15px;'>Colaboración con el cliente</strong> sobre negociación contractual</li><li><strong style='font-size:15px;'>Respuesta ante el cambio</strong> sobre seguir un plan</li></ul><p>Esto es, aunque valoramos los elementos de la derecha, valoramos más los de la izquierda.</p></pre>",
									]
					},
					{
						title: "Desarrollo Ágil de Software",
						subtitle: "Principios del Manifiesto Ágil",
						sections: [
										"<p>Tras los cuatro valores descritos, los firmantes redactaron los siguientes, como los principios que de ellos se derivan:</p>",
										"<p><ul><li>Nuestra principal prioridad es satisfacer al cliente a través de la entrega temprana y continua de software de valor.</li><li>Son bienvenidos los requisitos cambiantes, incluso si llegan tarde al desarrollo. Los procesos ágiles se doblegan al cambio como ventaja competitiva para el cliente.</li><li>Entregar con frecuencia software que funcione, en periodos de un par de semanas hasta un par de meses, con preferencia en los periodos breves.</li><li>Las personas del negocio y los desarrolladores deben trabajar juntos de forma cotidiana a través del proyecto.</li><li>Construcción de proyectos en torno a individuos motivados, dándoles la oportunidad y el respaldo que necesitan y procurándoles confianza para que realicen la tarea.</li><li>La forma más eficiente y efectiva de comunicar información de ida y vuelta dentro de un equipo de desarrollo es mediante la conversación cara a cara.</li><li>El software que funciona es la principal medida del progreso.</li><li>Los procesos ágiles promueven el desarrollo sostenido. Los patrocinadores, desarrolladores y usuarios deben mantener un ritmo constante de forma indefinida.</li><li>La atención continua a la excelencia técnica enaltece la agilidad.</li><li>La simplicidad como arte de maximizar la cantidad de trabajo que no se hace, es esencial.</li><li>Las mejores arquitecturas, requisitos y diseños emergen de equipos que se auto-organizan.</li><li>En intervalos regulares, el equipo reflexiona sobre la forma de ser más efectivo y ajusta su conducta en consecuencia.</li></ul></p>",
									]
					},
					{
						title: "Desarrollo Ágil de Software",
						subtitle: "Scrum",
						sections: [
										"<p>Existen metodologías que han sido participes del avance tecnológico desde sus inicios y más aún en el desarrollo de software. Es tal su participación, que con el tiempo han ido proporcionando soluciones a situaciones de forma práctica, obteniendo resultados optimos en menos tiempo o mejores resultados en tiempo similar.</p>",
										"<p><br><div class='row'><div class='col-sm-3'><img id='logo' class='img-responsive' src='./img/scrum_rugby.gif' alt='...' class='img-rounded'></div><div class='col-sm-9'><p>El concepto de Scrum tiene su origen en un estudio de 1986 sobre los nuevos procesos de desarrollo utilizados en productos exitosos en Japón y los Estados Unidos. Estos equipos que desarrollaron partían de requisitos muy generales, así como novedosos, y debían salir al mercado en mucho menos del tiempo del que se tardó en lanzar productos anteriores. Seguían patrones de ejecución de proyecto muy similares. En este estudio se comparaba la forma de trabajo de estos equipos altamente productivos y multidisciplinares con la colaboración entre los jugadores de Rugby y su formación de Scrum.</p></div></p>",
										"<p><br><div class='col-sm-6 col-sm-offset-1'>Según sus autores, Scrum de ser bien empleado, debe ser:<br><ul><li>Ligero</li><li>Fácil de entender</li><li>Extremadamente difícil de llegar a dominar</li></ul></div></p>",
									]
					},
					{
						title: "Conceptos Básicos",
						subtitle: "El Equipo Scrum",
						sections: [
										"<div class='row'><div class='col-sm-5'><img id='logo' class='img-responsive' src='./img/scrum_team2.png' alt='...' class='img-rounded'></div><div class='col-sm-6'><br><p>En la figura se puede encontrar a todos los involucrados con un proyecto Scrum, hay que diferenciar entre los pertenecientes al Equipo Scrum y a los otros roles externos a este.</p><ul><li>Scrum Master: Lider del equipo Scrum</li><br><li>Product Owner: Representante del Cliente en el Equipo</li><br><li>Development Team: o equipo de desarrollo</li><br><li>Business Owner: Representa administracion externa, generalmente es el patrocinador del proyecto.</li><br><li>Stake Holders: Corresponden a cualquier otro interesado en el resultado del proyecto.</li></ul><p>De estos dos últimos roles no se profundizará más, esto por alcance del presente tema.</p></div></div>"
									],
					},
					{
						title: "El Equipo Scrum",
						subtitle: "Product Owner",
						sections: [
										"<div class='row'><div class='col-sm-9'><p>Corresponde a una sola persona, responsable de maximizar el valor del producto y del trabajo del Equipo de Desarrollo. </p><br><p>Se encarga de la gestión de la Lista de Producto (Product Backlog que se verá mas adelante). Su trabajo entonces consiste en:</p><ul><li>Expresar los elementos del Product Backlog de forma clara.</li><li>Ordenar estos elementos con tal de alcanzar los objetivos de la mejor manera.</li><li>Optimizar el valor del trabajo del Equipo de Desarrollo.</li><li>Asegurar que la Lista del Producto sea visible, transparente y clara para todos.</li><li>Asegurar que el Equipo de Desarrollo entiende, a un nivel necesario, los elementos de esta lista.</li></ul></div><div class='col-sm-3'><img id='logo' class='img-responsive' src='./img/product_owner.png' alt='...' class='img-rounded'></div></div>",
									]
					},
					{
						title: "El Equipo Scrum",
						subtitle: "Development Team",
						sections: [
										"Este equipo está compuesto por los profesionales que son los que, exclusivamente, realizan el trabajo de desarrollar y entregar un incremento de producto “Terminado” tras cada Sprint, el cual puede ser potencialmente puesto en marcha una vez entregado.",
										"Al Equipo de Desarrollo se le empodera para que gestione su propio trabajo. Es por esto que el Equipo se caracteriza por ser:",
									],
					},
					{
						title: "Conceptos Básicos",
						subtitle: "Scrum Master",
						sections: [
										"El Scrum Master es el responsable de asegurar que Scrum es entendido y adoptado. Los Scrum Masters hacen esto asegurándose de que el Equipo Scrum trabaja ajustándose a la teoría, prácticas y reglas de Scrum.",
										"El Scrum Master es un líder que está al servicio del Equipo Scrum. El Scrum Master ayuda a las personas externas al Equipo Scrum a entender qué interacciones con el Equipo Scrum pueden ser de ayuda y cuáles no. El Scrum Master ayuda a todos a modificar estas interacciones para maximizar el valor creado por el Equipo Scrum.",
									]
					},
					{
						title: "Conceptos Básicos",
						subtitle: "Eventos de Scrum",
						sections: [],
						image: "proceso-scrum.jpg",
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint",
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint Planning Meeting",
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Daily Scrum",
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint Review",
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint Retrospective",
					},
					{
						title: "Conceptos Básicos",
						subtitle: "Artefactos de Scrum",
						sections: [],
						image: "scrum_process.png",
					},
					{
						title: "Artefactos de Scrum",
						subtitle: "Product Backlog",
					},
					{
						title: "Artefactos de Scrum",
						subtitle: "Sprint Backlog",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Aplicación de Scrum",
						subtitle: "Ejemplo Práctico",
					},
					{
						title: "Fin",
						subtitle: "Conclusión",
						sections: [
										"Muchas gracias por tu tiempo.",
										"<br>Scrum es una herramienta que sin duda te será útil en tu desarrollo profesional. Sigue aprendiendo para que puedas perfeccionar los conocimientos adquiridos.",
										"<br>Scrum es gratuito de la manera en que se ofrece en este software. Los roles, artefactos, eventos y reglas de Scrum son inmutables y aunque es posible implementar solo partes, el resultado no es Scrum. Scrum solo existe como un todo y funciona bien como contenedor para otras técnicas, metodologías y prácticas.",
										"Para seguir tu aprendizaje sobre Scrum, se recomiendan los siguientes tópicos:",
										"<ul><li>Transparencia de artefactos Scrum</li><li>Burndown Chart Scrum</li><li>Flujo Acumulado Scrum (cumulative flow)</li><li>Desarrollo incremental de software.</li></ul>",
									]
					},
				]
	$rootScope.cant = $scope.data.length-1;
	$rootScope.percent = 0;
}])
