import { Button, Center } from "native-base";
import React from "react";

function Buttons({ mt, mb, bg, color, children, onPress, disabled = false }) {
  return (
    <Center>
      <Button
        w="90%"
        h={55}
        mt={mt}
        mx="2px"
        bg={bg}
        mb={mb}
        rounded="full"
        disabled={disabled}
        _text={{
          color: color,
          fontWeight: "bold",
        }}
        _pressed={{ bg: bg }}
        onPress={onPress}
      >
        {children}
      </Button>
    </Center>
  );
}

export default Buttons;
