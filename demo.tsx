import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const initialValues = {
  name: '',
  age: '',
};

export default function SimpleAccordion() {
  const [values, setValues] = useState(initialValues);
  const [data, setData] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Name & Age</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form style={{ textAlign: 'center' }}>
              Name: <br />
              <input
                style={{ borderRadius: '5px' }}
                value={values.name}
                onChange={handleInputChange}
                name="name"
              />
              <br />
              Age: <br />
              <input
                style={{ borderRadius: '5px' }}
                value={values.age}
                onChange={handleInputChange}
                name="age"
              />
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Qualification</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: 'center' }}>
            <select onChange={handleChange}>
              <option value="">Select</option>
              <option value="Mca">MCA</option>
              <option value="Degree">Degree</option>
              <option value="Btech">BTech</option>
            </select>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <b>Show Data</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Typography style={{ textAlign: 'center' }}>
              <p>Name: {values.name}</p> <p>Age: {values.age}</p>{' '}
              <p>Qualification: {data}</p>
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
