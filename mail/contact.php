<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validación de los campos del formulario
    if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, completa todos los campos correctamente.";
        exit();
    }

    // Sanitización de los datos
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email = strip_tags(htmlspecialchars($_POST['email']));
    $m_subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    // Configuración del correo
    $to = "antoniofuentesjara@gmail.com"; // Cambia esto a tu correo //
    $subject = "$m_subject: $name";
    $body = "Has recibido un nuevo mensaje desde tu formulario de contacto.\n\n".
            "Detalles:\n\n".
            "Nombre: $name\n\n".
            "Correo: $email\n\n".
            "Asunto: $m_subject\n\n".
            "Mensaje:\n$message";
    $header = "From: $email\n";
    $header .= "Reply-To: $email";

    // Intentar enviar el correo
    if (mail($to, $subject, $body, $header)) {
        http_response_code(200);
        echo "El mensaje ha sido enviado correctamente.";
    } else {
        http_response_code(500);
        echo "Lo sentimos, ha ocurrido un error al intentar enviar el mensaje.";
    }
} else {
    http_response_code(403);
    echo "Método de solicitud no permitido.";
}
?>
