var wConstants= {};

var BASE58_REGEX = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{0,}$');
wConstants.network ={};
wConstants.network.networkName = 'mainnet'; // 'devnet', 'testnet', 'mainnet'
wConstants.network.addressVersion = 1;
wConstants.network.networkCode = 'W';
wConstants.network.initialNonce = 0;

wConstants.features ={};
wConstants.features.aliasVersion =2;

wConstants.address ={};
wConstants.address.rawAddressLength = 35;
wConstants.address.addressPrefix = '1W';
wConstants.address.mainnetAddressRegexp = /^[a-zA-Z0-9]{35}$/;

wConstants.ui ={};
wConstants.ui.minimumPaymentAmount = 1e-8;
wConstants.ui.minimumTransactionFee = 0.001;
wConstants.ui.amountDecimalPlaces = 8;
wConstants.ui.javaMaxLong = 9223372036854775807;
wConstants.ui.maximumAttachmentByteSize = 140;

wConstants.transactions ={};
wConstants.transactions.paymentTransactionType=2;
wConstants.transactions.assetIssueTransactionType=3;
wConstants.transactions.assetTransferTransactionType=4;
wConstants.transactions.assetReissueTransactionType=5;
wConstants.transactions.exchangeTransactionType=7;
wConstants.transactions.startLeasingTransactionType=8;
wConstants.transactions.cancelLeasingTransactionType=9;
wConstants.transactions.createAliasTransactionType=10;
wConstants.transactions.makeAssetNameUniqueTransactionType=11;

wConstants.wordList=[
    'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse', 'access',
            'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act', 'action',
            'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance',
            'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent', 'agree', 'ahead', 'aim', 'air',
            'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert', 'alien', 'all', 'alley', 'allow', 'almost',
            'alone', 'alpha', 'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount', 'amused',
            'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal', 'ankle', 'announce', 'annual',
            'another', 'answer', 'antenna', 'antique', 'anxiety', 'any', 'apart', 'apology', 'appear', 'apple',
            'approve', 'april', 'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around',
            'arrange', 'arrest', 'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault',
            'asset', 'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract',
            'auction', 'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake',
            'aware', 'away', 'awesome', 'awful', 'awkward', 'axis', 'baby', 'bachelor', 'bacon', 'badge', 'bag',
            'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base',
            'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become', 'beef', 'before', 'begin',
            'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit', 'best', 'betray', 'better', 'between',
            'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black', 'blade', 'blame',
            'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush',
            'board', 'boat', 'body', 'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow',
            'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread', 'breeze',
            'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother',
            'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb', 'bulk', 'bullet', 'bundle',
            'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy', 'butter', 'buyer', 'buzz', 'cabbage',
            'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can', 'canal', 'cancel',
            'candy', 'cannon', 'canoe', 'canvas', 'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card',
            'cargo', 'carpet', 'carry', 'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch',
            'category', 'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census',
            'century', 'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge',
            'chase', 'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child',
            'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle',
            'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk', 'clever', 'click',
            'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close', 'cloth', 'cloud', 'clown', 'club',
            'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut', 'code', 'coffee', 'coil', 'coin', 'collect',
            'color', 'column', 'combine', 'come', 'comfort', 'comic', 'common', 'company', 'concert', 'conduct',
            'confirm', 'congress', 'connect', 'consider', 'control', 'convince', 'cook', 'cool', 'copper', 'copy',
            'coral', 'core', 'corn', 'correct', 'cost', 'cotton', 'couch', 'country', 'couple', 'course', 'cousin',
            'cover', 'coyote', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy',
            'cream', 'credit', 'creek', 'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch',
            'crowd', 'crucial', 'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture',
            'cup', 'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle', 'dad',
            'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate',
            'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense', 'define',
            'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny', 'depart', 'depend',
            'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk', 'despair', 'destroy',
            'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond', 'diary', 'dice', 'diesel',
            'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur', 'direct', 'dirt', 'disagree',
            'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance', 'divert', 'divide', 'divorce',
            'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain', 'donate', 'donkey', 'donor', 'door',
            'dose', 'double', 'dove', 'draft', 'dragon', 'drama', 'drastic', 'draw', 'dream', 'dress', 'drift', 'drill',
            'drink', 'drip', 'drive', 'drop', 'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty',
            'dwarf', 'dynamic', 'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo', 'ecology',
            'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow', 'elder', 'electric',
            'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody', 'embrace', 'emerge',
            'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless', 'endorse', 'enemy', 'energy',
            'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough', 'enrich', 'enroll', 'ensure',
            'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip', 'era', 'erase', 'erode', 'erosion',
            'error', 'erupt', 'escape', 'essay', 'essence', 'estate', 'eternal', 'ethics', 'evidence', 'evil', 'evoke',
            'evolve', 'exact', 'example', 'excess', 'exchange', 'excite', 'exclude', 'excuse', 'execute', 'exercise',
            'exhaust', 'exhibit', 'exile', 'exist', 'exit', 'exotic', 'expand', 'expect', 'expire', 'explain', 'expose',
            'express', 'extend', 'extra', 'eye', 'eyebrow', 'fabric', 'face', 'faculty', 'fade', 'faint', 'faith',
            'fall', 'false', 'fame', 'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal',
            'father', 'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female',
            'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file', 'film',
            'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fiscal', 'fish', 'fit',
            'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor', 'flee', 'flight', 'flip', 'float', 'flock',
            'floor', 'flower', 'fluid', 'flush', 'fly', 'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food',
            'foot', 'force', 'forest', 'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found',
            'fox', 'fragile', 'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown',
            'frozen', 'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future', 'gadget', 'gain', 'galaxy',
            'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp', 'gate',
            'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture', 'ghost', 'giant',
            'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance', 'glare', 'glass', 'glide',
            'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue', 'goat', 'goddess', 'gold', 'good', 'goose',
            'gorilla', 'gospel', 'gossip', 'govern', 'gown', 'grab', 'grace', 'grain', 'grant', 'grape', 'grass',
            'gravity', 'great', 'green', 'grid', 'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess',
            'guide', 'guilt', 'guitar', 'gun', 'gym', 'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy',
            'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health', 'heart', 'heavy',
            'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden', 'high', 'hill', 'hint', 'hip',
            'hire', 'history', 'hobby', 'hockey', 'hold', 'hole', 'holiday', 'hollow', 'home', 'honey', 'hood', 'hope',
            'horn', 'horror', 'horse', 'hospital', 'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble',
            'humor', 'hundred', 'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid', 'ice', 'icon', 'idea',
            'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune',
            'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate',
            'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury',
            'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install',
            'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue', 'item',
            'ivory', 'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join', 'joke',
            'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior', 'junk', 'just', 'kangaroo', 'keen', 'keep',
            'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten',
            'kiwi', 'knee', 'knife', 'knock', 'know', 'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp',
            'language', 'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit',
            'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal', 'legend', 'leisure',
            'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level', 'liar', 'liberty', 'library',
            'license', 'life', 'lift', 'light', 'like', 'limb', 'limit', 'link', 'lion', 'liquid', 'list', 'little',
            'live', 'lizard', 'load', 'loan', 'lobster', 'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery',
            'loud', 'lounge', 'love', 'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics',
            'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage',
            'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market',
            'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum', 'maze',
            'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt', 'member', 'memory',
            'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message', 'metal', 'method', 'middle',
            'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor', 'minute', 'miracle', 'mirror', 'misery',
            'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile', 'model', 'modify', 'mom', 'moment', 'monitor',
            'monkey', 'monster', 'month', 'moon', 'moral', 'more', 'morning', 'mosquito', 'mother', 'motion', 'motor',
            'mountain', 'mouse', 'move', 'movie', 'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom',
            'music', 'must', 'mutual', 'myself', 'mystery', 'myth', 'naive', 'name', 'napkin', 'narrow', 'nasty',
            'nation', 'nature', 'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest',
            'net', 'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee',
            'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now', 'nuclear',
            'number', 'nurse', 'nut', 'oak', 'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious',
            'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often', 'oil', 'okay', 'old', 'olive',
            'olympic', 'omit', 'once', 'one', 'onion', 'online', 'only', 'open', 'opera', 'opinion', 'oppose',
            'option', 'orange', 'orbit', 'orchard', 'order', 'ordinary', 'organ', 'orient', 'original', 'orphan',
            'ostrich', 'other', 'outdoor', 'outer', 'output', 'outside', 'oval', 'oven', 'over', 'own', 'owner',
            'oxygen', 'oyster', 'ozone', 'pact', 'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic',
            'panther', 'paper', 'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient',
            'patrol', 'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen',
            'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo', 'phrase',
            'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot', 'pink', 'pioneer',
            'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate', 'play', 'please', 'pledge',
            'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar', 'pole', 'police', 'pond', 'pony', 'pool',
            'popular', 'portion', 'position', 'possible', 'post', 'potato', 'pottery', 'poverty', 'powder', 'power',
            'practice', 'praise', 'predict', 'prefer', 'prepare', 'present', 'pretty', 'prevent', 'price', 'pride',
            'primary', 'print', 'priority', 'prison', 'private', 'prize', 'problem', 'process', 'produce', 'profit',
            'program', 'project', 'promote', 'proof', 'property', 'prosper', 'protect', 'proud', 'provide', 'public',
            'pudding', 'pull', 'pulp', 'pulse', 'pumpkin', 'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose',
            'purse', 'push', 'put', 'puzzle', 'pyramid', 'quality', 'quantum', 'quarter', 'question', 'quick', 'quit',
            'quiz', 'quote', 'rabbit', 'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally',
            'ramp', 'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor', 'ready',
            'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle', 'reduce',
            'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release', 'relief',
            'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen', 'repair', 'repeat',
            'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response', 'result', 'retire',
            'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib', 'ribbon', 'rice', 'rich',
            'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot', 'ripple', 'risk', 'ritual', 'rival', 'river',
            'road', 'roast', 'robot', 'robust', 'rocket', 'romance', 'roof', 'rookie', 'room', 'rose', 'rotate',
            'rough', 'round', 'route', 'royal', 'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural', 'sad',
            'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand',
            'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter', 'scene',
            'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script', 'scrub', 'sea',
            'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed', 'seek', 'segment', 'select',
            'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service', 'session', 'settle', 'setup',
            'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell', 'sheriff', 'shield', 'shift', 'shine',
            'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop', 'short', 'shoulder', 'shove', 'shrimp', 'shrug',
            'shuffle', 'shy', 'sibling', 'sick', 'side', 'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver',
            'similar', 'simple', 'since', 'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski',
            'skill', 'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight', 'slim',
            'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth', 'snack', 'snake', 'snap',
            'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda', 'soft', 'solar', 'soldier', 'solid',
            'solution', 'solve', 'someone', 'song', 'soon', 'sorry', 'sort', 'soul', 'sound', 'soup', 'source', 'south',
            'space', 'spare', 'spatial', 'spawn', 'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice',
            'spider', 'spike', 'spin', 'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray',
            'spread', 'spring', 'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs',
            'stamp', 'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick', 'still',
            'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street', 'strike', 'strong',
            'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway', 'success', 'such',
            'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny', 'sunset', 'super', 'supply',
            'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey', 'suspect', 'sustain', 'swallow',
            'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim', 'swing', 'switch', 'sword', 'symbol',
            'symptom', 'syrup', 'system', 'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target',
            'task', 'taste', 'tattoo', 'taxi', 'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term',
            'test', 'text', 'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought',
            'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber', 'time', 'tiny',
            'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler', 'toe', 'together', 'toilet',
            'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool', 'tooth', 'top', 'topic', 'topple',
            'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist', 'toward', 'tower', 'town', 'toy', 'track',
            'trade', 'traffic', 'tragic', 'train', 'transfer', 'trap', 'trash', 'travel', 'tray', 'treat', 'tree',
            'trend', 'trial', 'tribe', 'trick', 'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true',
            'truly', 'trumpet', 'trust', 'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey',
            'turn', 'turtle', 'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical', 'ugly',
            'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy',
            'uniform', 'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update',
            'upgrade', 'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful', 'useless',
            'usual', 'utility', 'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor',
            'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue', 'verb', 'verify', 'version',
            'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory', 'video', 'view', 'village',
            'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual', 'vital', 'vivid', 'vocal', 'voice',
            'void', 'volcano', 'volume', 'vote', 'voyage', 'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want',
            'warfare', 'warm', 'warrior', 'wash', 'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear',
            'weasel', 'weather', 'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what',
            'wheat', 'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will', 'win',
            'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise', 'wish', 'witness', 'wolf',
            'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world', 'worry', 'worth', 'wrap', 'wreck', 'wrestle',
            'wrist', 'write', 'wrong', 'yard', 'year', 'yellow', 'you', 'young', 'youth', 'zebra', 'zero', 'zone', 'zoo'
];

var cryptoService = {};
cryptoService.getNetworkIdByte = function (){
    return wConstants.network.networkCode.charCodeAt(0) & 0xFF;
};

cryptoService.appendUint8Arrays = function(array1, array2) {
    var tmp = new Uint8Array(array1.length + array2.length);
    tmp.set(array1, 0);
    tmp.set(array2, array1.length);
    return tmp;
};

cryptoService.appendNonce = function (originalSeed) {
    // change this is when nonce increment gets introduced
    var nonce = new Uint8Array(converters.int32ToBytes(wConstants.network.initialNonce, true));
    return cryptoService.appendUint8Arrays(nonce, originalSeed);
};
    
cryptoService.sha256 = function (message) {
    var bytes;
    if (typeof(message) == 'string'){
        bytes = converters.stringToByteArray(message);
    }else{
        bytes = message;
    }
    var wordArray = converters.byteArrayToWordArrayEx(new Uint8Array(bytes));
    var resultWordArray = CryptoJS.SHA256(wordArray);

    return converters.wordArrayToByteArrayEx(resultWordArray);
};

cryptoService.prepareKey = function (key) {
    var rounds = 1000;
    var digest = key;
    for (var i = 0; i < rounds; i++) {
        digest = converters.byteArrayToHexString(cryptoService.sha256(digest));
    }

    return digest;
};

cryptoService.blake2b = function (input) {
    return blake2b(input, null, 32);
};

cryptoService.keccak = function(messageBytes) {
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    return keccak_256.array(messageBytes);
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
};
cryptoService.hashChain = function(noncedSecretPhraseBytes) {
    return cryptoService.keccak(cryptoService.blake2b(new Uint8Array(noncedSecretPhraseBytes)));
};

            // Base68 encoding/decoding implementation
cryptoService.base58 = {
    encode: function (buffer) {
        return Base58.encode(buffer);
    },
    decode: function (string) {
        return Base58.decode(string);
    }
};

cryptoService.buildAccountSeedHash = function(seedBytes) {
    var data = cryptoService.appendNonce(seedBytes);
    var seedHash = cryptoService.hashChain(data);

    return cryptoService.sha256(Array.prototype.slice.call(seedHash));
};

cryptoService.buildKeyPair = function(seedBytes) {
    var accountSeedHash = cryptoService.buildAccountSeedHash(seedBytes);
    var p = axlsign.generateKeyPair(accountSeedHash);

    return {
        public: cryptoService.base58.encode(p.public),
        private: cryptoService.base58.encode(p.private)
    };
};

cryptoService.buildPublicKey = function (seedBytes) {
    return cryptoService.buildKeyPair(seedBytes).public;
};

cryptoService.buildPrivateKey = function (seedBytes) {
    return cryptoService.buildKeyPair(seedBytes).private;
};

cryptoService.buildRawAddress = function (encodedPublicKey) {
    var publicKey = cryptoService.base58.decode(encodedPublicKey);
    var publicKeyHash = cryptoService.hashChain(publicKey);

    var prefix = new Uint8Array(2);
    prefix[0] = wConstants.network.addressVersion;
    prefix[1] = cryptoService.getNetworkIdByte();

    var unhashedAddress = cryptoService.appendUint8Arrays(prefix, publicKeyHash.slice(0, 20));
    var addressHash = cryptoService.hashChain(unhashedAddress).slice(0, 4);

    return cryptoService.base58.encode(cryptoService.appendUint8Arrays(unhashedAddress, addressHash));
};

cryptoService.buildRawAddressFromSeed = function (secretPhrase) {
    var publicKey = cryptoService.getPublicKey(secretPhrase);

    return cryptoService.buildRawAddress(publicKey);
};

//Returns publicKey built from string
cryptoService.getPublicKey = function(secretPhrase) {
    return cryptoService.buildPublicKey(converters.stringToByteArray(secretPhrase));
};

//Returns privateKey built from string
cryptoService.getPrivateKey = function(secretPhrase) {
    return cryptoService.buildPrivateKey(converters.stringToByteArray(secretPhrase));
};

//Returns key pair built from string
cryptoService.getKeyPair = function (secretPhrase) {
    return cryptoService.buildKeyPair(converters.stringToByteArray(secretPhrase));
};

// function accepts buffer with private key and an array with dataToSign
// returns buffer with signed data
// 64 randoms bytes are added to the signature
// method falls back to deterministic signatures if crypto object is not supported
cryptoService.nonDeterministicSign = function(privateKey, dataToSign) {
    var crypto = window.crypto || window.msCrypto;
    var random;
    if (crypto) {
        random = new Uint8Array(64);
        crypto.getRandomValues(random);
    }

    var signature = axlsign.sign(privateKey, new Uint8Array(dataToSign), random);

    return cryptoService.base58.encode(signature);
};

// function accepts buffer with private key and an array with dataToSign
// returns buffer with signed data
cryptoService.deterministicSign = function(privateKey, dataToSign) {
    var signature = axlsign.sign(privateKey, new Uint8Array(dataToSign));

    return cryptoService.base58.encode(signature);
};

cryptoService.verify = function(senderPublicKey, dataToSign, signatureBytes) {
    return axlsign.verify(senderPublicKey, dataToSign, signatureBytes);
};

cryptoService.encryptWalletSeed = function (seed, key) {
    var aesKey = cryptoService.prepareKey(key);

    return CryptoJS.AES.encrypt(seed, aesKey);
};

cryptoService.decryptWalletSeed = function (cipher, key, checksum) {
    var aesKey = cryptoService.prepareKey(key);
    var data = CryptoJS.AES.decrypt(cipher, aesKey);

    var actualChecksum = cryptoService.seedChecksum(converters.hexStringToByteArray(data.toString()));
    if (actualChecksum === checksum)
        return converters.hexStringToString(data.toString());
    else
        return false;
};

cryptoService.seedChecksum = function (seed) {
    return converters.byteArrayToHexString(cryptoService.sha256(seed));
};

var passPhraseService = {};
passPhraseService.generate= function(){
    var crypto = window.crypto || window.msCrypto;
    var bits = 160;
    var wordCount = wConstants.wordList.length;
    var log2FromWordCount = Math.log(wordCount) / Math.log(2);
    var wordsInPassPhrase = Math.ceil(bits / log2FromWordCount);
    var random = new Uint16Array(wordsInPassPhrase);
    var passPhrase;

    crypto.getRandomValues(random);

    var i = 0,
        index,
        words = [];

    for (; i < wordsInPassPhrase; i++) {
        index = random[i] % wordCount;
        words.push( wConstants.wordList[index]);
    }

    passPhrase = words.join(' ');

    crypto.getRandomValues(random);

    return passPhrase;
};

var signService = {};

signService.getAssetIssueTxTypeBytes = function () {
    return [wConstants.transactions.assetIssueTransactionType];
};

signService.getAssetReissueTxTypeBytes = function () {
    return [wConstants.transactions.assetReissueTransactionType];
};

signService.getAssetTransferTxTypeBytes = function () {
    return [wConstants.transactions.assetTransferTransactionType];
};

signService.getStartLeasingTxTypeBytes = function () {
    return [wConstants.transactions.startLeasingTransactionType];
};

signService.getCancelLeasingTxTypeBytes = function () {
    return [wConstants.transactions.cancelLeasingTransactionType];
};

signService.getCreateAliasTxTypeBytes = function () {
    return [wConstants.transactions.createAliasTransactionType];
};

// Keys

signService.getPublicKeyBytes = function (publicKey) {
    return utilityService.base58StringToByteArray(publicKey);
};

signService.getPrivateKeyBytes = function (privateKey) {
    return cryptoService.base58.decode(privateKey);
};

// Data fields

signService.getNetworkBytes = function () {
    return [utilityService.getNetworkIdByte()];
};

signService.getTransactionIdBytes = function (tx) {
    return utilityService.base58StringToByteArray(tx);
};

signService.getRecipientBytes = function (recipient) {
    if (recipient.slice(0, 6) === 'alias:') {
        return [].concat(
            [wConstants.features.aliasVersion],
            [utilityService.getNetworkIdByte()],
            utilityService.stringToByteArrayWithSize(recipient.slice(8)) // Remove leading 'asset:W:'
        );
    } else {
        return utilityService.base58StringToByteArray(recipient);
    }
};

signService.getAssetIdBytes = function (assetId, mandatory) {
    if (mandatory) {
        return utilityService.base58StringToByteArray(assetId);
    } else {
        return assetId ? [1].concat(utilityService.base58StringToByteArray(assetId)) : [0];
    }
};

signService.getAssetNameBytes = function (assetName) {
    return utilityService.stringToByteArrayWithSize(assetName);
};

signService.getAssetDescriptionBytes = function (assetDescription) {
    return utilityService.stringToByteArrayWithSize(assetDescription);
};

signService.getAssetQuantityBytes = function (assetQuantity) {
    return utilityService.longToByteArray(assetQuantity);
};

signService.getAssetDecimalPlacesBytes = function (assetDecimalPlaces) {
    return [assetDecimalPlaces];
};

signService.getAssetIsReissuableBytes = function (assetIsReissuable) {
    return utilityService.booleanToBytes(assetIsReissuable);
};

signService.getAmountBytes = function (amount) {
    return utilityService.longToByteArray(amount);
};

signService.getFeeAssetIdBytes = function (feeAssetId) {
    return signService.getAssetIdBytes(feeAssetId);
};

signService.getFeeBytes = function (fee) {
    return utilityService.longToByteArray(fee);
};

signService.getTimestampBytes = function (timestamp) {
    return utilityService.longToByteArray(timestamp);
};

signService.getAttachmentBytes = function (attachment) {
    return utilityService.byteArrayWithSize(attachment);
};

signService.getAliasBytes = function (alias) {
    return utilityService.byteArrayWithSize([].concat(
        [wConstants.features.aliasVersion],
        [utilityService.getNetworkIdByte()],
        utilityService.stringToByteArrayWithSize(alias)
    ));
};

signService.getOrderTypeBytes = function (orderType) {
    return utilityService.booleanToBytes(orderType);
};

signService.getOrderIdBytes = function (orderId) {
    return utilityService.base58StringToByteArray(orderId);
};

// Signatures

signService.buildSignature = function (bytes, privateKey) {
    var privateKeyBytes = signService.getPrivateKeyBytes(privateKey);
    return cryptoService.nonDeterministicSign(privateKeyBytes, bytes);
};

var utilityService = {};
utilityService.getNetworkIdByte = function () {
    return wConstants.network.networkCode.charCodeAt(0) & 0xFF
};

// long to big-endian bytes
utilityService.longToByteArray = function (value) {
    var bytes = new Array(7);
    for (var k = 7; k >= 0; k--) {
        bytes[k] = value & (255);
        value = value / 256;
    }

    return bytes;
};

// short to big-endian bytes
utilityService.shortToByteArray = function (value) {
    return converters.int16ToBytes(value, true);
};

utilityService.base58StringToByteArray = function (base58String) {
    var decoded = cryptoService.base58.decode(base58String);
    var result = [];
    for (var i = 0; i < decoded.length; ++i) {
        result.push(decoded[i] & 0xff);
    }

    return result;
};

utilityService.stringToByteArrayWithSize = function (string) {
    var bytes = converters.stringToByteArray(string);
    return utilityService.byteArrayWithSize(bytes);
};

utilityService.byteArrayWithSize = function (byteArray) {
    var result = utilityService.shortToByteArray(byteArray.length);
    return result.concat(byteArray);
};

utilityService.booleanToBytes = function (flag) {
    return flag ? [1] : [0];
};

utilityService.endsWithWhitespace = function (value) {
    return /\s+$/g.test(value);
};

utilityService.getTime = function() {
    return Date.now();
};

utilityService.isValidBase58String = function (input) {
    return BASE58_REGEX.test(input);
};

// Add a prefix in case of alias
utilityService.resolveAddressOrAlias = function (string) {
    if (string.length <= 30) {
        return 'alias:' + wConstants.network.networkCode + ':' + string;
    } else {
        return string;
    }
};

var assetService = {};

assetService.buildId = function (transactionBytes) {
    var hash = cryptoService.blake2b(new Uint8Array(transactionBytes));
    return cryptoService.base58.encode(hash);
}

assetService.buildCreateAssetSignatureData = function (asset, tokensQuantity, senderPublicKey) {
    return [].concat(
        signService.getAssetIssueTxTypeBytes(),
        signService.getPublicKeyBytes(senderPublicKey),
        signService.getAssetNameBytes(asset.name),
        signService.getAssetDescriptionBytes(asset.description),
        signService.getAssetQuantityBytes(tokensQuantity),
        signService.getAssetDecimalPlacesBytes(asset.decimalPlaces),
        signService.getAssetIsReissuableBytes(asset.reissuable),
        signService.getFeeBytes(asset.fee.toCoins()),
        signService.getTimestampBytes(asset.time)
    );
}

assetService.createAssetIssueTransaction = function (asset, sender) {
    validateService.validateAssetIssue(asset);
    validateService.validateSender(sender);

    asset.time = asset.time || utilityService.getTime();
    asset.reissuable = !asset.reissuable ? asset.reissuable : false;
    asset.description = asset.description || '';

    var assetCurrency = Currency.create({
        displayName: asset.name,
        precision: asset.decimalPlaces
    });

    var tokens = new Money(asset.totalTokens, assetCurrency);
    var signatureData = assetService.buildCreateAssetSignatureData(asset, tokens.toCoins(), sender.publicKey);
    var signature = signService.buildSignature(signatureData, sender.privateKey);

    return {
        id: assetService.buildId(signatureData),
        name: asset.name,
        description: asset.description,
        quantity: tokens.toCoins(),
        decimals: Number(asset.decimalPlaces),
        reissuable: asset.reissuable,
        timestamp: asset.time,
        fee: asset.fee.toCoins(),
        senderPublicKey: sender.publicKey,
        signature: signature
    };
};

assetService.buildCreateAssetTransferSignatureData = function (transfer, senderPublicKey) {
    return [].concat(
        signService.getAssetTransferTxTypeBytes(),
        signService.getPublicKeyBytes(senderPublicKey),
        signService.getAssetIdBytes(transfer.amount.currency.id),
        signService.getFeeAssetIdBytes(transfer.fee.currency.id),
        signService.getTimestampBytes(transfer.time),
        signService.getAmountBytes(transfer.amount.toCoins()),
        signService.getFeeBytes(transfer.fee.toCoins()),
        signService.getRecipientBytes(transfer.recipient),
        signService.getAttachmentBytes(transfer.attachment)
    );
}

assetService.createAssetTransferTransaction = function (transfer, sender) {
    validateService.validateAssetTransfer(transfer);
    validateService.validateSender(sender);

    transfer.time = transfer.time || utilityService.getTime();
    transfer.attachment = transfer.attachment || [];
    transfer.recipient = utilityService.resolveAddressOrAlias(transfer.recipient);

    var signatureData = assetService.buildCreateAssetTransferSignatureData(transfer, sender.publicKey);
    var signature = signService.buildSignature(signatureData, sender.privateKey);

    return {
        id: assetService.buildId(signatureData),
        recipient: transfer.recipient,
        timestamp: transfer.time,
        assetId: transfer.amount.currency.id,
        amount: transfer.amount.toCoins(),
        fee: transfer.fee.toCoins(),
        feeAssetId: transfer.fee.currency.id,
        senderPublicKey: sender.publicKey,
        signature: signature,
        attachment: cryptoService.base58.encode(transfer.attachment)
    };
};

assetService.buildCreateAssetReissueSignatureData =function (reissue, senderPublicKey) {
    return [].concat(
        signService.getAssetReissueTxTypeBytes(),
        signService.getPublicKeyBytes(senderPublicKey),
        signService.getAssetIdBytes(reissue.totalTokens.currency.id, true),
        signService.getAssetQuantityBytes(reissue.totalTokens.toCoins()),
        signService.getAssetIsReissuableBytes(reissue.reissuable),
        signService.getFeeBytes(reissue.fee.toCoins()),
        signService.getTimestampBytes(reissue.time)
    );
}

assetService.createAssetReissueTransaction = function (reissue, sender) {
    validateService.validateAssetReissue(reissue);
    validateService.validateSender(sender);

    reissue.reissuable = !reissue.reissuable ? reissue.reissuable : false;
    reissue.time = reissue.time || utilityService.getTime();

    var signatureData = assetService.buildCreateAssetReissueSignatureData(reissue, sender.publicKey);
    var signature = signService.buildSignature(signatureData, sender.privateKey);

    return {
        id: assetService.buildId(signatureData),
        assetId: reissue.totalTokens.currency.id,
        quantity: reissue.totalTokens.toCoins(),
        reissuable: reissue.reissuable,
        timestamp: reissue.time,
        fee: reissue.fee.toCoins(),
        senderPublicKey: sender.publicKey,
        signature: signature
    };
};

var validateService = {};

validateService.validateSender = function (sender) {
    if (!sender) {
        throw new Error('Sender hasn\'t been set');
    }

    if (!sender.publicKey) {
        throw new Error('Sender account public key hasn\'t been set');
    }

    if (!sender.privateKey) {
        throw new Error('Sender account private key hasn\'t been set');
    }
};

validateService.validateAssetIssue = function (issue) {
    if (!issue.name) {
        throw new Error('Asset name hasn\'t been set');
    }

    if (!issue.totalTokens) {
        throw new Error('Total tokens amount hasn\'t been set');
    }

    if (!issue.decimalPlaces) {
        throw new Error('Token decimal places amount hasn\'t been set');
    }

    if (issue.fee.currency !== Currency.WAVES) {
        throw new Error('Transaction fee must be nominated in Waves');
    }
};

validateService.validateAssetTransfer = function (transfer) {
    if (!transfer.recipient) {
        throw new Error('Recipient account hasn\'t been set');
    }

    if (!transfer.fee) {
        throw new Error('Transaction fee hasn\'t been set');
    }

    if (!transfer.amount) {
        throw new Error('Transaction amount hasn\'t been set');
    }
};

validateService.validateAssetReissue = function (reissue) {
    if (reissue.totalTokens.currency === Currency.WAVES) {
        throw new Error('Reissuing Waves is not allowed.');
    }

    if (!reissue.totalTokens) {
        throw new Error('Total tokens amount hasn\'t been set');
    }

    if (!reissue.fee) {
        throw new Error('Transaction fee hasn\'t been set');
    }

    if (reissue.fee.currency !== Currency.WAVES) {
        throw new Error('Transaction fee must be nominated in Waves');
    }
};

var addressService = {};


addressService.cleanupOptionalPrefix = function(displayAddress) {
    if (displayAddress.length <= 30) {
        // Don't change aliases
        return displayAddress;
    }

    var address = displayAddress,
        prefixLen = wConstants.address.addressPrefix.length;

    if (address.length > wConstants.address.rawAddressLength || address.startsWith(wConstants.address.addressPrefix)) {
        address = address.substr(prefixLen, address.length - prefixLen);
    }

    return address;
};

addressService.validateAddress = function(address) {
    var cleanAddress = addressService.cleanupOptionalPrefix(address);
    return wConstants.address.mainnetAddressRegexp.test(cleanAddress);
};


$(document).ready(function(){
    
    
    
    
    
    
});