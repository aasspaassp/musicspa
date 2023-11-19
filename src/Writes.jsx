function Writes() {
    const writes = [
        "La energía universal", "Samsara del capitalismo", "Si no hay recursos naturales tampoco habrá recurso mentales", "El peor de los universos posibles, la historia es una maldición", "Short term pleasures", "Agradecer y aprovechar el amor que se ha dado", "Desde mi interior puedo sanar mi corazón",
    "Alguien quiere que estés bien", "Liberarme del mismo peso que yo me he puesto", "Cuando sueltes podrán crecer como el bosque lleno de vida", "Soltar porque lo que tiene que pasar pasará", "Lo que veo cuando sigo la luz", "Los últimos pasos son los más oscuros",
    "Quiero ser buen escucha", "¿Qué son las vibras?¿Puedo escuchar mi alma?", "Es frágil y cálido", "La fundación del ego es atacada", "No voy a seguir peleando esto", "Soltar todo para lograr todo", "Conviertete en luz porque era parte de la luz del universo",
    "El agua tiene la cualidad de alcanzar el gran océano", "La estrella brilla con todo su intensidad cuando el agua llega al océano", "La sinceridad de ser libre", "No puedes estar en un estado de bienestaer si estás dividide", "Estar feliz con unx mismx, no hay nada de qué arrepentirse", 
    "La meditación acerca a la imaginación", "La madre de la inteligencia nos habla a través de la imaginación y la intuición", "No temer al libido, aceptar el erotismo", "La esperanza surge cuando se camine hacia la luz", "Todo está bien porque siempre te vamos a querer", "Siente mucho amor para combatir malos sentimientos", "Ningún cuerpo debe ser usado", "Seguir siendo amable", 
    "Separando lo que no es real", "Hay personas que te quieren bien", "No aliementes los pensamientos que te hagan sentir menos", "Al meditar se invita", "No odies el presente porque es el único lugar donde puedes estar ahora", "Hell and anxiety even in meditation. But such a blessing because time starts everytime and the world start everywhere", 
    "Remember who you are", "Child me", "I'm happy with my path", "To be focused, to have energy, to be loved", "Allow heart connection to happen"]

    let selectedIndexPhrase = Math.floor(Math.random()*writes.length);

    return(
        <>
        <div>
            {writes[selectedIndexPhrase]}
        </div>
        </>
    )

    

}

export default Writes