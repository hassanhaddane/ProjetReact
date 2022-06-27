import React, { useState } from 'react';

function App() {
    const [data, setData] = useState({
        text: '',
    });
    const [form, setForm] = useState({
        text: '',
    });
    const [submit, submitted] = useState(false);

    const printValues = e => {
        e.preventDefault();
        setForm({
            text: data.text,
        });
        submitted(true);
    };

    const updateField = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Exercice 2</h1>

            <form onSubmit={printValues}>
                <label>
                    Text:
                    <input
                        value={data.text}
                        name="text"
                        onChange={updateField}
                    />
                </label>
                <br />

                <br />
                <button>Submit</button>
            </form>

            <p>{submit?form.text:null}</p>

        </div>
    );
}

export default App;