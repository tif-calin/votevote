import fptp from './onechoice/fptp';
import veto from './onechoice/veto';
import signed from './onechoice/signed';

const methods = {
  [fptp.id]: {
    names: ['first past the post', 'plurality', 'single-member plurality', 'choose-one voting'],
    ...fptp
  },
  [veto.id]: {
    names: ['veto', 'anti-plurality'],
    reference: ['https://en.wikipedia.org/wiki/Anti-plurality_voting'],
    ...veto
  },
  [signed.id]: {
    names: ['boehm signed', 'balanced plurality', 'negative', 'bipolar'],
    reference: ['https://electowiki.org/wiki/Negative_vote'],
    equivalences: {
      'fptp': '2 candidate elections',
      'approval': '3 candidate elections'
    },
    ...signed,
  },
};

export default methods;
