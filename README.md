# 🧾 Formulario con Validación usando React Hook Form + Zod

Este proyecto es una aplicación React que implementa un formulario totalmente validado utilizando **React Hook Form** junto con **Zod** para el manejo de esquemas y validaciones.  
Permite validar campos como nombre, correo electrónico, contraseña y confirmación de contraseña de manera declarativa, elegante y escalable.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 18+** – Biblioteca principal para la interfaz.
- 🧩 **React Hook Form** – Manejo de formularios con controladores.
- ✅ **Zod** – Validaciones de esquema y tipado seguro.
- 🎨 **CSS** – Estilos básicos personalizados.

---

## 📂 Estructura del proyecto

src/
│
├── App.tsx
├── App.css
│
├── CustomForm/
│ ├── CustomForm.tsx
│ └── components/
│ └── CustomInput.tsx
│
└── models/
└── form.model.ts

yaml
Copiar código

---

## 🧠 Funcionamiento

### **1. App.tsx**
Es el componente raíz que renderiza el formulario principal:

```tsx
import './App.css';
import CustomForm from './CustomForm/CustomForm';

function App() {
  return <CustomForm />;
}

export default App;
2. CustomForm.tsx
Define el formulario y la lógica de validación:

Usa useForm de React Hook Form.

Conecta el esquema de Zod usando zodResolver.

Implementa validaciones al perder el foco (mode: "onBlur").

tsx
Copiar código
const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
  resolver: zodResolver(schema),
  mode: "onBlur",
});

const onSubmit: SubmitHandler<FormValues> = (data) => {
  console.log(data);
};
Campos incluidos:

Name

Email

Password

Confirm Password

3. InputForm (CustomInput.tsx)
Componente reutilizable para cada campo del formulario.
Utiliza Controller de React Hook Form para conectar los inputs al sistema de control de estado y validación.

Incluye manejo de errores con mensajes personalizados:

tsx
Copiar código
{error && <p className="error-message">{error.message}</p>}
4. Validación con Zod (form.model.ts)
Define el esquema del formulario y valida:

Campos obligatorios.

Formato de email.

Contraseñas con mínimo de 6 caracteres.

Coincidencia entre password y confirmPassword.

ts
Copiar código
export const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});
💡 Características principales
✅ Validación inmediata con mensajes de error personalizados
✅ Reutilización de componentes de entrada
✅ Integración limpia entre React Hook Form y Zod
✅ Arquitectura modular y escalable
✅ Validación de contraseñas coincidentes

⚙️ Instalación y ejecución
Clona este repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
Instala las dependencias:

bash
Copiar código
npm install
Inicia el servidor de desarrollo:

bash
Copiar código
npm run dev
Abre tu navegador en:

arduino
Copiar código
http://localhost:5173
🧰 Dependencias principales
json
Copiar código
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^3.x",
  "zod": "^3.x"
}
🖼️ Captura de ejemplo
(Puedes añadir aquí una imagen del formulario en ejecución)

swift
Copiar código
📸 Ejemplo:
[![Formulario React Hook Form + Zod](ruta/de/la/imagen.png)](ruta/de/la/imagen.png)