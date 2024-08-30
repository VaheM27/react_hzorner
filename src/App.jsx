import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios("http://localhost:3000/posts").then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const initialValues = {
    authorName: "",
    email: "",
    topic: "",
    desc: "",
  };

  const validationSchema = object({
    authorName: string()
      .min(3, "Min length is 3")
      .max(20, "Min length is 20")
      .required("Please write your name"),
    email: string().required(),
    topic: string().min(10, "Min length is 10").required(),
    desc: string().required(),
  });

  const handleAdd = (values) => {
    const newData = {
      id: nanoid(6),
      authorName: values.authorName,
      email: values.email,
      topic: values.topic,
      desc: values.desc,
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
                  name="authorName"
                  placeholder="Author Name"
                />
                <ErrorMessage component="span" name="authorName" />
              </div>
              <div className="inputBox">
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage component="span" name="email" />
              </div>
              <div className="inputBox">
                <Field type="text" name="topic" placeholder="Write topic" />
                <ErrorMessage component="span" name="topic" />
              </div>
              <Field
                as="textarea"
                name="desc"
                placeholder="Topic description"
              />
              <ErrorMessage component="span" name="desc" />
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
              <p className="element">Author Name</p>
              <br />
              {item.authorName}
            </p>
            <p>
              <p className="element">Email</p>
              <br />
              {item.email}
            </p>
            <p>
              <p className="element"> Topic </p>
              <br />
              {item.topic}
            </p>
            <p>
              <p className="element"> Description </p>
              <br />
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
