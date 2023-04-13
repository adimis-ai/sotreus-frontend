import React, { useState } from 'react'
import { Client } from './types';
import { AiFillEdit } from 'react-icons/ai';

interface ClientEditProps {
    client: Client;
}

export const ClientEdit: React.FC<ClientEditProps> = ({ client }) => {
    const [name, setName] = useState(client.Name);
    const [email, setEmail] = useState(client.Email);
    const [tags, setTags] = useState(client.Tags.join(', '));
    const [enable, setEnable] = useState(client.Enable);

    const handleEditClient = () => {
        // Call the API to update the client with the form data
        console.log('Submitting the form with the following data:', {
          name,
          email,
          tags: tags.split(',').map((tag) => tag.trim()),
          enable,
        });
    };

    return (
        <div>
            <label htmlFor="client-edit"><AiFillEdit/></label>
            <input type="checkbox" id="client-edit" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative bg-gradient-to-br from-black via-black to-blue-800 p-5">
                <label htmlFor="client-edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-3xl text-blue-200 font-bold">Edit Client Information</h3>
                    <div>
                        <form onSubmit={handleEditClient}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-blue-100 text-md text-left my-3 font-semibold">
                                    Name
                                    </label>
                                    <input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input input-bordered w-full max-w-x"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-blue-100 text-md text-left my-3 font-semibold">
                                    Email
                                    </label>
                                    <input
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full max-w-x"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="tags" className="block text-blue-100 text-md text-left my-3 font-semibold">
                                    Tags (comma-separated)
                                    </label>
                                    <input
                                    id="tags"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    className="input input-bordered w-full max-w-x"
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className="label cursor-pointer">
                                        <span className="label-text text-gray-100 text-md">Enable/Disable User</span> 
                                        <input
                                        id="enable"
                                        type="checkbox"
                                        checked={enable}
                                        onChange={(e) => setEnable(e.target.checked)}
                                        className="toggle-sm toggle toggle-info my-3"
                                        />
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-900 font-semibold rounded-lg p-3 px-5 mt-4">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientEdit
