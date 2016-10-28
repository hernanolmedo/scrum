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
										"<div><p>En la figura se muestra un ciclo de vida clásico. Este ciclo es iterativo, ya que desde cualquier punto se puede volver al anterior en caso de no pasar una revisión.</p></div><br /><div><img id='logo' class='img-responsive' src='./img/ciclo_de_vida.png' alt='...' class='img-rounded'></div>"
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
										"<p>Este equipo está compuesto por los profesionales que son los que, exclusivamente, realizan el trabajo de desarrollar y entregar un incremento de producto “Terminado” tras cada Sprint, el cual puede ser potencialmente puesto en marcha una vez entregado.</p>",
										"<p>Al Equipo de Desarrollo se le empodera para que gestione su propio trabajo. Es por esto que el Equipo se caracteriza por ser:</p>",
										"<ul><li>Autoorganizado: El propio Equipo de Desarrollo determina cómo convertir los elementos de la Lista de Producto en funcionalidades potencialmente desplegables tras cada Sprint, esto es, ninguna persona puede establecer la forma en que este equipo trabaja, ni siquiera el Scrum Master.</li><li>Multifuncional: Dentro del equipo, los profesionales se especializan en diferentes áreas, por lo que conforman una entidad que cuenta, como equipo, con todas las habilidades necesarias para desarrollar el trabajo necesario para llevar a cabo los incrementos del producto.</li><li>No se reconocen títulos personales: Sin excepciones, cada miembro del Equipo de Desarrollo es un Desarrollador, sea cual sea el trabajo que realice.</li><li>No se reconocen sub-equipos: El marco de trabajo Scrum no reconoce sub-equipos formados a partir de los integrantes del Equipo de Desarrollo, a pesar de los dominios particulares que se requieran para llevar a cabo el trabajo. Tampoco existen excepciones a esta regla.</li><li>La responsabilidad es del Equipo de Desarrollo: Como un todo, este equipo tiene toda la responsabilidad del trabajo que desempeña, independientemente de las habilidades especializadas y de que ciertos integrantes se enfoquen en cierta área en particular.</li></ul>"
									],
					},
					{
						title: "Conceptos Básicos",
						subtitle: "Scrum Master",
						sections: [
										"<p>El Scrum Master es el responsable de asegurar que Scrum es entendido y adoptado. Los Scrum Masters hacen esto asegurándose de que el Equipo Scrum trabaja ajustándose a la teoría, prácticas y reglas de Scrum.</p>",
										"<p>El Scrum Master es un líder que está al servicio del Equipo Scrum. El Scrum Master ayuda a las personas externas al Equipo Scrum a entender qué interacciones con el Equipo Scrum pueden ser de ayuda y cuáles no. El Scrum Master ayuda a todos a modificar estas interacciones para maximizar el valor creado por el Equipo Scrum.</p>",
										"<div class='row'><div class='col-sm-4'><img id='logo' class='img-responsive' src='./img/scrum_master.jpg' alt='...' class='img-rounded'></div><div class='col-sm-8'><p>A continuación se listan algunas de sus obligaciones:</p><ul><li>Servicios al Dueño del Producto: Ayudar a gestionar la Lista de Producto de manera efectiva; Entender la planificación del producto; Ayudar a ordenar la Lista de Producto para maximizar el valor; Entender y practicar la agilidad (dado que el dueño del producto probablemente sea el menos familiarizado con Scrum); Facilitar los eventos de Scrum según se requiera o necesite.</li><li>Servicio al Equipo de Desarrollo: Guiar al Equipo en ser autoorganizado y multifuncional; Ayudar al Equipo a crear productos maximizando el valor; Eliminar impedimentos para el progreso del trabajo a realizar; Facilitar los eventos de Scrum según se requiera o necesite.</li></ul></div></div>"
									]
					},
					{
						title: "Conceptos Básicos",
						subtitle: "Eventos de Scrum",
						sections: [
										"En la documentacion de Scrum se definen una serie de eventos destinados a regularizar el trabajo de todo el equipo, de esta forma minimizar las reuniones innecesarias y focalizar los momentos de discusión con tematicas precisas. ",
						],
						image: "proceso-scrum.jpg",
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint",
						sections: [
										"<div class='row'><div class='col-sm-8'><p>El corazón de Scrum es el Sprint, es un bloque de tiempo de un mes o menos (en rigor puede ir desde dos semanas hasta dos meses, pero se recomienda el plazo de un mes como la mejor práctica) durante el cual se crea un incremento de producto “Terminado”, utilizable y potencialmente desplegable. Es más conveniente si la duración de los Sprints es consistente a lo largo del esfuerzo de desarrollo. Cada nuevo Sprint comienza inmediatamente después de la finalización del Sprint previo. </p><br><p>Los Sprints contienen y consisten de la Reunión de Planificación del Sprint (Sprint Planning Meeting), los Scrums Diarios (Daily Scrums), el trabajo de desarrollo, la Revisión del Sprint (Sprint Review), y la Retrospectiva del Sprint (Sprint Retrospective). </p><br><p>El objetivo del Sprint (Sprint Goal) es una meta establecida al principio del Sprint, esta meta debe mantenerse siempre visible por todo el equipo Scrum, de manera que siempre se tomen las deciciones correspondientes en pro de que este objetivo sea alcanzado.</p></div><div class='col-sm-4'><img id='logo' class='img-responsive' src='./img/sprint.png' alt='...' class='img-rounded'></div></div>"
						]
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint Planning Meeting",
						sections: [
										"<div class='row'><div class='col-sm-4'><img id='logo' class='img-responsive' src='./img/planing.jpg' alt='...' class='img-rounded'></div><div class='col-sm-8'>El trabajo a realizar durante el Sprint se planifica en la Reunión de Planificación de Sprint. Todo el equipo debe participar en este proceso. <br><br>La Reunión de Planificación de Sprint tiene un máximo de duración de ocho horas para un Sprint de un mes. <br><br>La Reunión de Planificación de Sprint responde a las siguientes preguntas: <br><ul><li>¿Qué puede entregarse en el Incremento resultante del Sprint que comienza?</li><br><li>¿Cómo se conseguirá hacer el trabajo necesario para entregar el Incremento?</li></ul></div></div>"
						]
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Daily Scrum",
						sections: [
										"<div class='row'><div class='col-sm-8'><p>El Scrum Diario es una reunión con un bloque de tiempo de 15 minutos para que el Equipo de Desarrollo sincronice sus actividades y defina  la planificación para las siguientes 24 horas. Esto se lleva a cabo inspeccionando el trabajo avanzado desde el último Scrum Diario y haciendo una proyección acerca del trabajo que podría completarse antes del siguiente. </p><br><p>Para reducir la complejidad, el Scrum Diario se realiza a la misma hora y en el mismo lugar todos los días, de esta manera no se pierde tiempo notificando o tomando deciciones innecesarias. Durante la reunión, cada miembro del Equipo de Desarrollo explica: </p><br><ul><li>¿Qué hice ayer que ayudó al Equipo de Desarrollo a lograr el Objetivo del Sprint? </li><br><li>¿Qué haré hoy para ayudar al Equipo de Desarrollo a lograr el Objetivo del Sprint? </li><br><li>¿Veo algún impedimento que evite que el Equipo de Desarrollo o yo logremos el Objetivo del Sprint? </li></ul></div><div class='col-sm-4'><img id='logo' class='img-responsive' src='./img/daily-scrum-team.jpg' alt='...' class='img-rounded'></div></div>"
						]
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint Review",
						sections: [
										"<div class='row'><div class='col-sm-4'><img id='logo' class='img-responsive' src='./img/review.png' alt='...' class='img-rounded'></div><div class='col-sm-8'><p>Al final del Sprint se lleva a cabo una Revisión para identificar el Incremento funcional del producto y así poder adaptar la Lista de Producto si fuese necesario. Durante la Revisión de Sprint, el Equipo Scrum completo discute sobre lo que se hizo durante el Sprint. Basándose en los elementos detectados, y en cualquier cambio que pueda haber surgido en la Lista de Producto durante el Sprint, los asistentes determinan de manera conjunta las siguientes funcionalidades que se abordarán con la finalidad de maximizar el valor.</p><br><p>Se trata de una reunión restringida a un bloque de tiempo máximo de cuatro horas para Sprints de duración estándar.</p><br><p>El resultado de la Revisión de Sprint es una Lista de Producto revisada, que define los elementos de la Lista de Producto posibles para el siguiente Sprint.</p> </div></div>"
						]
					},
					{
						title: "Eventos de Scrum",
						subtitle: "Sprint Retrospective",
						sections: [
										"<div class='row'><div class='col-sm-6'><p>La Retrospectiva de Sprint es una oportunidad para el Equipo Scrum de inspeccionarse a sí mismo y crear un plan de acción para mejorar su desempeño de cara al siguiene Sprint. </p><p>El propósito de la Retrospectiva de Sprint es: </p><ul><li>Inspeccionar cómo fue el último Sprint en cuanto a personas, relaciones, procesos y herramientas.</li><li>Identificar y ordenar los elementos más importantes que salieron bien y las posibles mejoras.</li><li>Crear un plan para implementar las mejoras a la forma en la que el Equipo Scrum desempeña su trabajo. </li></ul></div><div class='col-sm-6'><img id='logo' class='img-responsive' src='./img/retro.jpg' alt='...' class='img-rounded'></div></div>",
										"<br><p>Como resultado de la Retrospectiva de Sprint, el equipo Scrum debe haber identificado que falencias presentó en el pasado y obtenido una propuesta para mejorarlas a lo largo del Sprint siguiente. Las mejoras para falencias encontradas en el funcionamiento general o individual del equipo Scrum pueden ser realizadas en cualquier momento del desarrollo (mientras no interfiera con el objetivo o duración del Sprint), pero el proceso de retrospectiva entrega al equipo una instancia especialmente dedicada para este propósito.</p>"
						]
					},
					{
						title: "Conceptos Básicos",
						subtitle: "Artefactos de Scrum",
						sections: [
										"<div class='row'><div class='col-sm-6 col-sm-offset-3'><img id='logo' class='img-responsive' src='./img/artefactos.png' alt='...' class='img-rounded'></div></div>"
						],
					},
					{
						title: "Artefactos de Scrum",
						subtitle: "Product Backlog",
						sections: [
										"<div class='row'><div class='col-sm-3'><img id='logo' class='img-responsive' src='./img/p_backlog.jpg' alt='...' class='img-rounded'></div><div class='col-sm-8 col-sm-offset-1'><p>La Lista de Producto es una lista ordenada de todo lo que podría ser necesario en el producto, y es la única fuente de requisitos para cualquier cambio a realizarse en el producto. El Dueño de Producto (Product Owner) es el responsable de la Lista de Producto, incluyendo su contenido, disponibilidad y ordenación. Toda esta elaboración se realiza con el apoyo del Scrum Master quien esta encargado de orientar al dueño del producto en la correcta elaboración de este artefacto.</p><br><p>Se dice que una Lista de Producto nunca está completa. Por esto, el desarrollo inicial solo debe contemplar los requisitos que se encuentren mas claramente definidos, y priorizando según el valor que aportan al Dueño del Producto.</p></div></div>"
						]
					},
					{
						title: "Artefactos de Scrum",
						subtitle: "Sprint Backlog",
						sections: [
										"<div class='row'><div class='col-sm-8'><p>La Lista de Pendientes del Sprint se compone por dos partes, por un lado estan los elementos de la Lista de Producto seleccionados para ser realizados en el presente Sprint, y por otra parte el plan definido para entregar el Incremento de producto y conseguir el Objetivo del Sprint. La Lista de Pendientes del Sprint es una predicción hecha por el Equipo de Desarrollo acerca de qué funcionalidad formará parte del próximo Incremento. </p><br><p>La Lista de Pendientes del Sprint hace visible todo el trabajo que el Equipo de Desarrollo identifica como necesario para alcanzar el Objetivo del Sprint.</p></div><div class='col-sm-4'><img id='logo' class='img-responsive' src='./img/s_backlog.png' alt='...' class='img-rounded'></div></div>"
						]
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
