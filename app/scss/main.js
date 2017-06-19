import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box'
  },
  'html': {
    'scrollBehavior': 'smooth'
  },
  'body': {
    'backgroundColor': 'salmon'
  },
  '#scrool_btn': {
    'display': 'none',
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 50 }],
    'right': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '99',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'outline': 'none',
    'backgroundColor': 'transparent',
    'color': 'white',
    'cursor': 'pointer',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '50px'
  },
  'nav': {
    'height': [{ 'unit': 'vh', 'value': 10 }],
    'background': '#fff',
    'padding': [{ 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.02 }]
  },
  'content': {
    'display': 'table-cell',
    'verticalAlign': 'middle',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3C4663' }]
  },
  'section': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.07 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.07 }],
    'display': 'table',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': 'string', 'value': 'none' }],
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  'section:nth-of-type(2n)': {
    'backgroundColor': 'salmonlight'
  },
  'img': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.5 }],
    'objectFit': 'scale-down',
    'padding': [{ 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.02 }]
  },
  'greetings': {
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 3 }],
    'fontStyle': 'italic',
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'greetings span': {
    'padding': [{ 'unit': '%V', 'value': 0.006 }, { 'unit': '%H', 'value': 0.006 }, { 'unit': '%V', 'value': 0.006 }, { 'unit': '%H', 'value': 0.006 }],
    'background': '#3C4663'
  },
  'greetings p': {
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blog': {
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'fontStyle': 'italic',
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.03 }]
  },
  'talk_with_me': {
    'textAlign': 'center',
    'maxWidth': [{ 'unit': '%H', 'value': 0.9 }],
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }]
  },
  'talk_with_me h2': {
    'fontStyle': 'italic',
    'color': '#fff'
  },
  'talk_with_me form field': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'talk_with_me form field label': {
    'textTransform': 'uppercase',
    'color': 'white',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'background': '#3C4663',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.45 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.075 }],
    'transition': 'all 333ms ease-in-out'
  },
  'talk_with_me form field label + span': {
    'opacity': '0',
    'color': 'white',
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 12 }],
    'left': [{ 'unit': '%H', 'value': 0.07 }],
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }],
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'salmon' }],
    'transition': 'all 333ms ease-in-out'
  },
  'talk_with_me form field input[type="text"]': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#E8E9EA',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': 'px', 'value': 15 }, { 'unit': '%H', 'value': 0.05 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.195 }],
    'color': '#3C4663',
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.05 }],
    'textTransform': 'uppercase'
  },
  'talk_with_me form field textarea': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#E8E9EA',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': 'px', 'value': 15 }, { 'unit': '%H', 'value': 0.05 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.195 }],
    'color': '#3C4663',
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.05 }],
    'textTransform': 'uppercase'
  },
  'talk_with_me form field input[type="text"]#msg': {
    'height': [{ 'unit': 'px', 'value': 18 }],
    'resize': 'none',
    'transition': 'all 333ms ease-in-out'
  },
  'talk_with_me form field textarea#msg': {
    'height': [{ 'unit': 'px', 'value': 18 }],
    'resize': 'none',
    'transition': 'all 333ms ease-in-out'
  },
  'talk_with_me form field input[type="text"]:focus': {
    'outline': 'none'
  },
  'talk_with_me form field input[type="text"]focused': {
    'outline': 'none'
  },
  'talk_with_me form field textarea:focus': {
    'outline': 'none'
  },
  'talk_with_me form field textareafocused': {
    'outline': 'none'
  },
  'talk_with_me form field input[type="text"]:focus#msg': {
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'talk_with_me form field input[type="text"]focused#msg': {
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'talk_with_me form field textarea:focus#msg': {
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'talk_with_me form field textareafocused#msg': {
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'talk_with_me form field input[type="text"]:focus + label': {
    'width': [{ 'unit': '%H', 'value': 0.18 }],
    'background': 'salmon',
    'color': '#3C4663'
  },
  'talk_with_me form field input[type="text"]focused + label': {
    'width': [{ 'unit': '%H', 'value': 0.18 }],
    'background': 'salmon',
    'color': '#3C4663'
  },
  'talk_with_me form field textarea:focus + label': {
    'width': [{ 'unit': '%H', 'value': 0.18 }],
    'background': 'salmon',
    'color': '#3C4663'
  },
  'talk_with_me form field textareafocused + label': {
    'width': [{ 'unit': '%H', 'value': 0.18 }],
    'background': 'salmon',
    'color': '#3C4663'
  },
  'talk_with_me form field input[type="text"]focused + label': {
    'color': 'salmon'
  },
  'talk_with_me form field textareafocused + label': {
    'color': 'salmon'
  },
  'talk_with_me form field:hover label': {
    'width': [{ 'unit': '%H', 'value': 0.18 }],
    'background': '#3C4663',
    'color': 'white'
  },
  'talk_with_me form input[type="submit"]': {
    'background': '#3C4663',
    'color': 'white',
    'WebkitAppearance': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'textTransform': 'uppercase',
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.1 }],
    'transition': 'all 333ms ease-in-out'
  },
  'talk_with_me form input[type="submit"]:hover': {
    'color': 'salmon'
  },
  'talk_with_me form input[type="submit"]:focus': {
    'outline': 'none',
    'background': '#f7270f'
  },
  'talk_with_me form button': {
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.05 }]
  },
  'footer': {
    'textAlign': 'center',
    'backgroundColor': '#fff',
    'color': '#6D748C'
  },
  'a': {
    'color': '#FE4B74',
    'fontWeight': '500',
    'textDecoration': 'none'
  },
  'p': {
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'fontStyle': 'italic',
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.03 }]
  }
});
