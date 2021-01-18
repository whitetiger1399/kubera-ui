import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  color?: string;
  width?: number;
  height?: number;
  align?: string;
  backgroundTransparent?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  rectBase: {
    fill: theme.palette.background.paper,
  },
  rectBaseTransparent: {
    fill: 'transparent',
  },
  table: (props: StyleProps) => ({
    display: 'flex',
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundTransparent
      ? 'transparent'
      : theme.palette.background.paper,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '3px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '3px',
    },

    '&::-webkit-scrollbar-corner': {
      backgroundColor: theme.palette.background.paper,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.highlight,
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.highlight,
    },
  }),

  tableDataRow: {
    float: 'left',
    display: 'flex',
    alignItems: 'flex-start',
  },
  tableFont: {
    fontFamily: 'Ubuntu',
    fontSize: '0.8rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '16px',
    borderBottom: 'none',
    letterSpacing: '0em',
    paddingLeft: '0.5em',
    textAlign: 'left',
    minWidth: '3rem',
  },

  tableHeading: {
    paddingLeft: '1.5em',
    fontSize: '0.9rem',
    color: theme.graph.dashboard.lightBlue,
    whiteSpace: 'nowrap',
    fontWeight: 500,
  },

  hr: {
    width: '12px',
    height: '2px',
  },
  grid: {
    stroke: theme.palette.disabledBackground,
    strokeOpacity: 0.2,
  },
  tooltipLine: {
    stroke: '#5252F6',
    strokeWidth: 4,
    pointerEvents: 'none',
    // strokeDasharray: '5,2',
  },
  tooltipData: {
    float: 'left',
    display: 'flex',
    alignItems: 'flex-start',
  },
  tableRow: {
    '& td': {
      borderBottom: 'none !important',
    },
  },
  tableCell: {
    maxWidth: '30%',
    minWidth: '10%',
  },
}));
export { useStyles };
