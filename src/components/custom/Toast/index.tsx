import {
  useToast, Toast, ToastDescription,
} from '@/src/components/ui/toast';
import React from 'react';

const useShowToast = () => {
  const toast = useToast();

  const showNewToast: any = (description: string) => {
    const newId = Math.random();
    toast.show({
      id: newId.toString(),
      placement: 'bottom',
      duration: 3000,
      render: ({ id }: any) => {
        const uniqueToastId = 'toast-' + id;
        return (
          <Toast nativeID={uniqueToastId} action="success" variant="solid" >
            <ToastDescription className="text-lg font-semibold">
              {description}
            </ToastDescription>
          </Toast>
        );
      },
    });
  };
  return { showNewToast };
};

export default useShowToast;

