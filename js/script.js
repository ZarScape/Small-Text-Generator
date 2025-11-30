document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputText');
    const maps = {
    smallcaps: {
        'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ғ','g':'ɢ','h':'ʜ','i':'ɪ',
        'j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ',
        's':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ'
    },
    superscript: {
        'A':'ᴬ','B':'ᴮ','C':'ᶜ','D':'ᴰ','E':'ᴱ','F':'ᶠ','G':'ᴳ','H':'ᴴ','I':'ᴵ',
        'J':'ᴶ','K':'ᴷ','L':'ᴸ','M':'ᴹ','N':'ᴺ','O':'ᴼ','P':'ᴾ','Q':'ᵠ','R':'ᴿ',
        'S':'ˢ','T':'ᵀ','U':'ᵁ','V':'ⱽ','W':'ᵂ','X':'ˣ','Y':'ʸ','Z':'ᶻ',
        'a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ','i':'ᶦ',
        'j':'ʲ','k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ','q':'ᵠ','r':'ʳ',
        's':'ˢ','t':'ᵗ','u':'ᵘ','v':'ᵛ','w':'ʷ','x':'ˣ','y':'ʸ','z':'ᶻ',
        '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹',
        '(':'⁽',')':'⁾','+':'⁺','-':'⁻','=':'⁼','?':'ˀ','`':'ᵎ'
    },
    subscript: {
        'A':'ₐ','E':'ₑ','H':'ₕ','I':'ᵢ','J':'ⱼ','K':'ₖ','L':'ₗ','M':'ₘ','N':'ₙ',
        'O':'ₒ','P':'ₚ','R':'ᵣ','S':'ₛ','T':'ₜ','U':'ᵤ','V':'ᵥ','X':'ₓ',
        'a':'ₐ','b':'ᵦ','c':'𝒸','d':'𝒹','e':'ₑ','f':'𝒻','g':'𝓰','h':'ₕ','i':'ᵢ',
        'j':'ⱼ','k':'ₖ','l':'ₗ','m':'ₘ','n':'ₙ','o':'ₒ','p':'ₚ','q':'ᵩ','r':'ᵣ',
        's':'ₛ','t':'ₜ','u':'ᵤ','v':'ᵥ','w':'𝓌','x':'ₓ','y':'ᵧ','z':'𝓏',
        '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉',
        '(':'₍',')':'₎','+':'₊','-':'₋','=':'₌'
    }
    };

    function transform(str, map) {
    return Array.from(str).map(c => map[c] || c).join('');
    }

    function updateAll() {
    const text = input.value;
    document.getElementById('smallcapsResult').textContent = transform(text, maps.smallcaps);
    document.getElementById('superscriptResult').textContent = transform(text, maps.superscript);
    document.getElementById('subscriptResult').textContent = transform(text, maps.subscript);
    }

    document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        const txt = document.getElementById(type + 'Result').textContent;
        navigator.clipboard.writeText(txt).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 1500);
        });
    });
    });

    input.addEventListener('input', updateAll);
    updateAll();
});
