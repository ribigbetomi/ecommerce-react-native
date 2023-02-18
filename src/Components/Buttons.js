import { Button } from "native-base";
import React from "react";

function Buttons({ mt, bg, color, children, onPress }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      bg={bg}
      rounded="full"
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default Buttons;
