import React from 'react';
import { PageTitle, Select, CodeInput } from '../../components';
import { useTranslation } from "react-i18next";
import { Form } from "@unform/web";

export function Home() {

  const formRef = React.useRef<any | null>()
  const { t } = useTranslation()

  const handleSubmit = async (data: any) => {
    console.log(data)
  }

  const options = [
    { label: 'Teste', value: 'teste' },
    { label: 'Teste1', value: 'teste1' },
    { label: 'Teste2', value: 'teste2' },
  ]

  return (
    <div>
      <PageTitle
        title={t("home.title")}
        subtitle={t("home.subtitle")}
      />
      <Form onSubmit={handleSubmit} ref={formRef} initialData={{ techs: 1 }}>
        <Select
          name="techs"
          options={options}
        />
        <CodeInput
          name="campo-cod"
        />
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default Home;
