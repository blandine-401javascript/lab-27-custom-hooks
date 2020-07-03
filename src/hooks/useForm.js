import { useState } from 'react';



function useForm(callback, initData) {
    const [formData, setFormData] = useState(initData || {});

    function updateForm(key, value) {
        let newFormData = { ...formData };
        newFormData[key] = value;

        setFormData(newFormData);
    }

    function submitForm(e) {
        e.preventDefault();

        callback(formData);
    }

    return [updateForm, submitForm, formData];
}

export default useForm;