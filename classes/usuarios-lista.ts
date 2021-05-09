import { Usuario } from "./usuario";


export class UsuariosLista {
    
    private lista: Usuario[] = [];

    constructor(){
    }


    //Agregar un usuario
    public agregar(usuario: Usuario){
        this.lista.push( usuario );
        console.log(this.lista);
        return usuario;
    }

    //Actualizar el nombre de usuario
    public actualizarNombre( id: string, nombre: string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('==== Actualizando Usuario ====');    
        console.log(this.lista);
    }

    //Obter lista de usuarios
    public getLista(){
        return this.lista;
    }

    //Obtener un usuario
    public getUsuario(id: string){
        return this.lista.find(usuario => usuario.id === id);
    }

    //Obtener Usuario en una sala en particular
    public getUsuarioEnSala(sala: string){
        return this.lista.filter(usuario => usuario.sala === sala);
    }

    //Borrar usuario
    public borrarUsuario(id: string){
        const tempUsuario = this.getUsuario( id );
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        console.log(this.lista);
        return tempUsuario;
    }

}

