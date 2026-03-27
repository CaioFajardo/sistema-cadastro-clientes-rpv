import { randomUUID } from "crypto"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function CadastrarClientes() {

    const DEFAULT_MESSAGE_RULE = "Campo obrigatório"

    const regras = z.object({
        nome: z.string().min(1, DEFAULT_MESSAGE_RULE),
        email: z.email(DEFAULT_MESSAGE_RULE),
        cpfcnpj: z.string.min(1, DEFAULT_MESSAGE_RULE).max(14, "Limite de 14 caracteres"),
        sexo: z.string().min(1, DEFAULT_MESSAGE_RULE).max(1)
        cep: z.string().min(1, DEFAULT_MESSAGE_RULE).max(9, "Cep inválido"),
        rua: z.string().min(1, DEFAULT_MESSAGE_RULE),
        bairro: z.string().min(1, DEFAULT_MESSAGE_RULE),
        cidade: z.string().min(1, DEFAULT_MESSAGE_RULE),
        estado: z.string().min(1, DEFAULT_MESSAGE_RULE),
        numero: z.string().min(1, DEFAULT_MESSAGE_RULE),
        complemento: z.string().min(1),
    })

    type FormType = z.infer<typeof regras>

    const form = useForm<FormType>({
        resolver: zodResolver(regras)
    })

    function onSubmit(data: FormType){
        
    }
    return (
        <div>
            <h1>Criar Clientes</h1>
        </div>
    )
}