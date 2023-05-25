import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const respose = await fetch(
        'https://646f1ad009ff19b120869664.mockapi.io/contacts',
        {
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        }
      );
      return respose.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    const newContact = {
      name: data.name,
      phone: data.number,
    };
    try {
      const response = await fetch(
        'https://646f1ad009ff19b120869664.mockapi.io/contacts',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newContact),
        }
      );
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://646f1ad009ff19b120869664.mockapi.io/contacts/${contactId}`,
        {
          method: 'DELETE',
        }
      );
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const contactsFilter = createAsyncThunk(
//   'tasks/fetchAll',
//   async (text, thunkAPI) => {
//     const url = new URL('https://646f1ad009ff19b120869664.mockapi.io/contacts');
//     url.searchParams.append('name', `${text}`); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false
//     try {
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: { 'content-type': 'application/json' },
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
