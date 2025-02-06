import React, { FC } from 'react';
import { ISearchFormProps } from './types';
import { Box } from '../ui/box';
import ControllerInput from '../custom/ControllerInput';
import ControllerSelect from '../custom/ControllerSelect';
import ControllerCheckbox from '../custom/ControllerCheckbox';
import Button from '../custom/Button';
import { categories, strategies } from './utils';

const SearchForm: FC<ISearchFormProps> = (props) => {
  const {
    control,
    isLoading,
    onSubmit,
    handleSubmit,
  } = props;

  return (
    <Box className="flex gap-8">
      <ControllerInput
        name="url"
        control={control}
        label="Ingrese url"
        placeholder="https://example.com"
      />
      <ControllerSelect
        name="strategy"
        label="Seleccione una estrategia"
        placeholder="Selecciona una estrategia"
        options={strategies}
        control={control}
      />
      <ControllerCheckbox
        options={categories}
        name="category"
        control={control}
      />
      <Button
        disabled={isLoading}
        onPress={handleSubmit(onSubmit)}
        textButton="Ejecutar análisis"
      />
    </Box>
  );
};

export default SearchForm;
