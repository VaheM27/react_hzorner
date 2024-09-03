import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios("http://localhost:3000/posts").then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const initialValues = {
    name: "",
    email: "",
    mark: "",
    img: "",
  };

  const validationSchema = object({
    name: string()
      .required("Please write your car name"),
    email: string().required(),
    mark: string().required(),
    img: string().required(),
  });

  const handleAdd = (values) => {
    const newData = {
      id: nanoid(6),
      name: values.name,
      email: values.email,
      mark: values.mark,
      img: values.img,
    };
    axios.post("http://localhost:3000/posts", newData).then(() => getData());
    setData([...data, newData]);
  };

  return (
    <div>
      <Formik
        onSubmit={handleAdd}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div className="inputBox">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage component="span" name="name" />
              </div>
              <div className="inputBox">
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage component="span" name="email" />
              </div>
              <div className="inputBox">
                <Field type="text" name="mark" placeholder="Mark" />
                <ErrorMessage component="span" name="mark" />
              </div>
              <Field type = 'text' name = 'img' placeholder='img'><img src="" alt="" /></Field>
              <ErrorMessage component="span" name="img" />
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>

      {data.map((item) => {
        return (
          <div className="main" key={item.id}>
            <p>
              <p className="element">Name</p>
              <br />
              {item.name}
            </p>
            <p>
              <p className="element">Email</p>
              <br />
              {item.email}
            </p>
            <p>
              <p className="element"> Mark </p>
              <br />
              {item.mark}
            </p>
            <p>
              <p className="element"> Description </p>
              <br />
              {item.img}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

