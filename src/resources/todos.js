// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, NumberInput,
         TextInput, BooleanField, Datagrid, List, NumberField,
         BooleanInput, TextField, DeleteButton, EditButton } from 'admin-on-rest';

export const todosCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    
      <TextInput source="id" />
    
      <TextInput source="text" />
    
      <BooleanInput source="completed" />
    
    </SimpleForm>
  </Create>
);

export const todosEdit = (props) => (
  <Edit title={'Edit Todo'} {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      
        <TextInput source="id" />
      
        <TextInput source="text" />
      
        <BooleanInput source="completed" />
      
    </SimpleForm>
  </Edit>
);

export const todosList = (props) => (
  <List {...props}>
    <Datagrid>
    
      <TextField source="id" />
    
      <TextField source="text" />
    
      <BooleanField source="completed" />
    
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);