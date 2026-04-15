import Link from "next/link";

//  Cada item abaixo deverá ser criado numa página separada dentro da pasta "pages"
const exercises = [
  {
    id: 1,
    title: "Theme Toggle",
    description: "Estado + Estilização (dark/light mode)"
  },
  {
    id: 2,
    title: "Counter com Histórico",
    description: "Estado (useState + lista)"
  },
  {
    id: 3,
    title: "Formulário de Login",
    description: "Formulários + Validação básica"
  },
  {
    id: 4,
    title: "Formulário de Cadastro",
    description: "Formulários + Validação avançada"
  },
  {
    id: 5,
    title: "Lista de Usuários",
    description: "Consumo de API (JSONPlaceholder)"
  },
  {
    id: 6,
    title: "Buscador com Filtro",
    description: "Estado + API + Estilização"
  },
  {
    id: 7,
    title: "Todo List",
    description: "Estado completo (CRUD) + Estilização"
  }
];

export default function Home() {

  return (
    <>
    
    {exercises.map(exercicio => {
      return(
        
        <Link className="flex flex=col w-full min-h-25 mt-4 items-center justify-center hover:bg-gray-300  hover:text-2xl hover:text-black hover:ease-in-out hover:duration-300" href={`exercicio-${exercicio.id}`}>
        <div className="flex flex-col items-center">
        <p className="text-md">{exercicio.title}</p>
        <p className="text-sm my-2">{exercicio.description}</p>
        </div>
        </Link>
        
      )
    })}
    </>
  );
}
