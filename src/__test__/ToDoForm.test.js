import React from 'react';
import ToDoForm from '../components/ToDoForm';
import { mount, shallow, renderer } from 'enzyme';

describe('ToDoForm works as expected', () => {
    it('accurately changes the state', () => {
        function dummyAddTask(state) {
           
            return state;
        }


        let component = mount(<ToDoForm addTask={dummyAddTask} />);

        let assignee = component.find('#todo-assignee');

        assignee.simulate('change', { target: { value: 'Sonia Kandah' } });
        assignee.simulate('change', { target: { value: 'Sonia Kandah2' } });

        let submit = component.find("button[type='submit']");

        submit.simulate('click');
        expect(dummyAddTask).toHaveBeenCalled();
    });
});