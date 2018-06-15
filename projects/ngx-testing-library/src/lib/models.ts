import { Type } from '@angular/core';

export interface Result {
  container: any;
  get: (token: any, notFoundValue?: any) => any;
  getComponentInstance: <T>(selectorOrComponent: string | Type<T>) => T;
  debug: () => void;
  detectChanges: (checkNoChanges?: boolean) => void;
  fixture: any;
  queryByPlaceholderText: any;
  queryAllByPlaceholderText: any;
  getByPlaceholderText: any;
  getAllByPlaceholderText: any;
  queryByText: any;
  queryAllByText: any;
  getByText: any;
  getAllByText: any;
  queryByLabelText: any;
  queryAllByLabelText: any;
  getByLabelText: any;
  getAllByLabelText: any;
  queryByAltText: any;
  queryAllByAltText: any;
  getByAltText: any;
  getAllByAltText: any;
  queryByTestId: any;
  queryAllByTestId: any;
  getByTestId: any;
  getAllByTestId: any;
  queryByTitle: any;
  queryAllByTitle: any;
  getByTitle: any;
  getAllByTitle: any;
  queryByValue: any;
  queryAllByValue: any;
  getByValue: any;
  getAllByValue: any;
}

export interface Options {
  detectChanges?: boolean;
  declarations: any[];
  providers?: any[];
  imports?: any[];
  schemas?: any[];
}

export interface ComponentInput<T> {
  component: Type<T>;
  parameters?: Partial<T>;
}
