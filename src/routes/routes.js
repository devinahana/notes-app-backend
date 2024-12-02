import * as handler from '../services/handler.js'

const routes = [
    {
        method: 'GET',
        path: '/notes',
        handler: handler.getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteByIdHandler,
    },
    {
        method: 'POST',
        path: '/notes',
        handler: handler.addNoteHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler,
    },

]

export default routes;