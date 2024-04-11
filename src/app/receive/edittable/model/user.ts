export interface User {
  isSelected: boolean;
  id: number
  empId: string;
  empName: string;
  rela: string;
  insuredId: string;
  insuredName: string;
  plan: string;  
  isEdit: boolean;
}

export const UserColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'empId',
    type: 'text',
    label: '員工證件號碼',
    required: true,
  },
  {
    key: 'empName',
    type: 'text',
    label: '員工姓名',
  },
  {
    key: 'rela',
    type: 'text',
    label: '與員工關係',
  },
  {
    key: 'insuredId',
    type: 'text',
    label: '被保險人證件號碼',
  },
  {
    key: 'insuredName',
    type: 'text',
    label: '被保人姓名',
  },
  {
    key: 'plan',
    type: 'text',
    label: '計畫別',
  },
  {
    key: 'updateUser',
    type: 'text',
    label: '更新人員',
  },  
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
