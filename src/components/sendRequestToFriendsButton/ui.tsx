import React from "react";
import Button from "@material-ui/core/Button";

import { useStyles, ISendRequestToFriendsButton } from ".";
import { useTranslation } from "react-i18next";

export const SendRequestToFriendsButton = ({
  onClickRequestToFriendsButton,
}: ISendRequestToFriendsButton) => {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Button
      classes={{
        root: classes.button,
        text: classes.buttonText,
      }}
      onClick={onClickRequestToFriendsButton}
    >
      {t("send")}
    </Button>
  );
};
