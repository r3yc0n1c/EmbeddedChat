import { css } from "@emotion/react";
import { lighten, darken } from "@embeddedchat/ui-elements";

export const getMessageStyles = ({ mode, colors }) => {
  const styles = {
    main: css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding-top: 0.5rem;
      padding-bottom: 0.25rem;
      padding-left: 2.25rem;
      padding-right: 2.25rem;
      color: ${colors.foreground};

      &:hover {
        background-color: ${mode === "light"
          ? darken(colors.background, 0.03)
          : lighten(colors.background, 1)};
      }
    `,
    messageEditing: css`
      background-color: ${colors.secondary};
      &:hover {
        background-color: ${colors.secondary};
      }
    `,

    pendingMessageBody: css`
      opacity: 0.4 !important;
      white-space: pre-line;
    `,

    specialMessage: css`
      background-color: ${mode === "light"
        ? darken(colors.background, 0.03)
        : lighten(colors.background, 1)};
    `,
  };

  return styles;
};

export const getMessageAvatarContainerStyles = ({ colors }) => {
  const styles = {
    container: css`
      margin: 3px;
      width: 2.25em;
      max-height: 2.25em;
      display: flex;
      justify-content: flex-end;
      color: ${colors.primary};
    `,
  };

  return styles;
};

export const getMessageBodyStyles = () => {
  const styles = {
    messageBody: css`
      position: relative;
      letter-spacing: 0rem;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25rem;
      flex-shrink: 1;
      transition: opacity 0.3s linear;
      word-break: break-word;
      opacity: 1;
      margin-top: 0.125rem;
      margin-bottom: 0.125rem;
    `,
  };

  return styles;
};

export const getMessageDividerStyles = ({ theme, colors }) => {
  const styles = {
    divider: css`
      letter-spacing: 0rem;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1rem;
      position: relative;
      display: flex;
      z-index: 1000;
      align-items: center;
      margin-top: 0.5rem;
      margin-bottom: 0.75rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    `,

    dividerContent: css`
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      background-color: ${colors.secondary};
      color: ${colors.secondaryForeground};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border-radius: ${theme.schemes.radius};
    `,

    bar: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;
      height: 1px;
      background-color: ${colors.secondary};
    `,
  };

  return styles;
};

export const getMessageHeaderStyles = ({ theme, colors }) => {
  const styles = {
    header: css`
      display: flex;
      flex-direction: row;
      flex-grow: 0;
      flex-shrink: 1;
      min-width: 1px;
      margin-top: 0.125rem;
      margin-bottom: 0.125rem;
      gap: 0.125rem;
      align-items: center;
    `,

    name: css`
      letter-spacing: 0rem;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex-shrink: 1;
    `,

    userName: css`
      color: ${colors.accentForeground};
      font-weight: 700;
      letter-spacing: 0rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex-shrink: 1;
    `,

    userRole: css`
      letter-spacing: 0rem;
      font-size: 0.75rem;
      padding: 0 0.25rem;
      margin: 0 0.1rem;
      border-radius: ${theme.schemes.radius};
      font-weight: 700;
      line-height: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: ${colors.secondary};
    `,

    userActions: css`
      color: ${colors.accentForeground};
      letter-spacing: 0rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex-shrink: 1;
    `,

    timestamp: css`
      color: ${colors.accentForeground};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: 0rem;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1rem;
      flex-shrink: 0;
      margin-left: 0.25rem;
    `,
  };

  return styles;
};

export const getMessageMetricsStyles = {
  metrics: css`
    display: flex;
    margin-left: -0.25rem;
    margin-right: -0.25rem;
    margin-top: 0.5rem;
  `,

  metricsItem: (isFirstMessage = false) => css`
    letter-spacing: 0rem;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${isFirstMessage ? "0.5rem" : "0.25rem"};
  `,

  metricsItemLabel: css`
    margin: 0.25rem;
    margin-inline-start: 0.25rem;
    white-space: nowrap;
  `,
};

export const getMessageReactionsStyles = ({ colors }) => {
  const styles = {
    container: css`
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
    `,

    reaction: css`
      letter-spacing: 0rem;
      font-size: 0.6rem;
      display: inline-flex;
      gap: 0.125rem;
      align-items: center;
      justify-content: center;
      padding: 0.1rem;
      margin: 0.125rem;
      cursor: pointer;
      img.joypixels {
        height: 0.75em;
        width: 0.75em;
      }
      p {
        margin: 0;
      }
      border: 1px solid ${colors.border};
      border-radius: 0.2rem;
    `,

    reactionMine: css`
      background: ${colors.secondary};
    `,
  };

  return styles;
};

export const getMessageToolboxStyles = ({ theme, colors }) => {
  const styles = {
    toolboxContainer: css`
      display: flex;
      position: absolute;
      bottom: 100%;
      z-index: 1101;
      right: 2rem;
    `,

    toolbox: css`
      display: flex;
      margin-left: -0.25rem;
      margin-right: -0.25rem;
      margin-top: 0.125rem;
      background-color: ${colors.background};
      box-shadow: 0 0 2px ${colors.foreground};
      gap: 0.25rem;
      padding: 0.25rem;
      border-radius: ${theme.schemes.radius};
    `,

    emojiPickerStyles: css`
      position: absolute;
      bottom: 100%;
      right: 1.5rem;
    `,
  };

  return styles;
};

export const getMessageBodyContainerStyles = () => {
  const styles = {
    bodyContainer: css`
      margin-left: 5px;
      position: relative;
      width: 100%;
    `,
  };

  return styles;
};