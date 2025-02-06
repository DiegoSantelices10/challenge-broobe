import React from 'react';
import { Pressable } from '@/src/components/ui/pressable';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '../../ui/actionsheet';
import { ActionSheetProps } from './types';
import { Text } from '../../ui/text';
import { capitalizeFirstLetter } from '@/src/utils';
import Entypo from '@expo/vector-icons/Entypo';

const ActionSheet = (props: ActionSheetProps) => {
  const {
    placeholder,
    options,
    onChange,
    label,
    value,
    ...rest
  } = props;

  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = (value: string) => {
    setShowActionsheet(false);
    onChange(value);
  };

  return (
    <>
      <Text className="p-0.5 pl-2 text-gray-400">{label}</Text>

      <Pressable
        className="h-12 p-2 px-3 rounded-md border border-gray-300 flex-row items-center justify-between"
        onPress={() => setShowActionsheet(true)}
        {...rest}
      >
        <Text className="font-mono text-[17px] text-gray-400">{capitalizeFirstLetter(value) || placeholder}</Text>
        {showActionsheet ?
          <Entypo name="chevron-up" size={24} color="black" />
          :
          <Entypo name="chevron-down" size={24} color="black" />
        }

      </Pressable>

      <Actionsheet
        snapPoints={[40]}
        isOpen={showActionsheet}
        onClose={() => setShowActionsheet(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="flex flex-col gap-4">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {options.map((option) => (
            <ActionsheetItem
              key={option.value}
              onPress={() => handleClose(option.value)}
              className="bg-gray-100 rounded-md">
              <ActionsheetItemText size="xl">{option.label}</ActionsheetItemText>
            </ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

export default ActionSheet;
