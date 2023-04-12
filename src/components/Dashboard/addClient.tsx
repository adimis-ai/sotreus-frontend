import React, { useState } from 'react';

const AddClient = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [tags, setTags] = useState('');
    const [enable, setEnable] = useState(true);

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
        <label htmlFor="add-client-modal">
            Add Client
        </label>
        <input type="checkbox" id="add-client-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative bg-gray-100 p-5">
                <label htmlFor="add-client-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h2 className="font-bold text-lg">Add Client</h2>

                <div>
                        <form onSubmit={handleEditClient}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-md text-left my-3 font-semibold">
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
                                    <label htmlFor="email" className="block text-md text-left my-3 font-semibold">
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
                                    <label htmlFor="tags" className="block text-md text-left my-3 font-semibold">
                                    Tags (comma-separated)
                                    </label>
                                    <input
                                    id="tags"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    className="input input-bordered w-full max-w-x"
                                    />
                                </div>
                                <div>
                                    <input
                                    id="enable"
                                    type="checkbox"
                                    checked={enable}
                                    onChange={(e) => setEnable(e.target.checked)}
                                    className="toggle toggle-lg my-3"
                                    />
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
    );
    };
    
    export default AddClient;