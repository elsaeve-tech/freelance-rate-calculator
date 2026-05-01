var state={experience:'beginner',scope:'small',client:'individual',timeline:'normal',lastLow:250,lastHigh:650,lastSummary:''};

var pricingData={
illustration:{label:'Illustration',small:[180,450],medium:[450,1100],large:[1100,2800],revisions:'1-2 rounds',summary:'A good range for custom illustration with a defined style, clear usage, and limited revisions.'},
childrensBook:{label:'Children’s book illustration',small:[100,250],medium:[1200,4500],large:[4500,12000],revisions:'2 rounds per spread/page',summary:'Children’s book pricing depends heavily on page count, complexity, character design, and rights. Small = single page/spread; medium/large = partial or full book.'},
logo:{label:'Logo design',small:[250,650],medium:[650,1600],large:[1600,5000],revisions:'2 rounds',summary:'Logo pricing should include concept development, refinement, final files, and basic usage terms.'},
branding:{label:'Brand identity',small:[650,1500],medium:[1500,3500],large:[3500,9000],revisions:'2-3 rounds',summary:'Brand identity usually includes a logo system, color palette, typography direction, and a simple style guide.'},
website:{label:'Website design',small:[800,1800],medium:[1800,4500],large:[4500,12000],revisions:'2 rounds per phase',summary:'Website pricing depends on page count, copy, platform, functionality, and whether you are designing only or also building.'},
social:{label:'Social media design',small:[150,400],medium:[400,1100],large:[1100,3000],revisions:'1-2 rounds',summary:'Social design pricing should account for templates, batch quantity, brand consistency, and whether captions or strategy are included.'},
painting:{label:'Original painting / custom art',small:[200,600],medium:[600,1800],large:[1800,8000],revisions:'Sketch approval only',summary:'Original art pricing should reflect size, materials, complexity, your style, and whether commercial usage is included.'}
};

var scriptItems=[
['Send your price confidently','Hi [Name],\n\nThank you again for sharing the details with me. Based on the scope, timeline, and deliverables, the project fee would be $[amount].\n\nThat includes [deliverables], plus [number] rounds of revisions. To reserve the project, I ask for a [percentage]% deposit before beginning.\n\nI would be happy to move forward if that works for you.'],
['Ask for a deposit','Hi [Name],\n\nI am excited to get started. To officially book the project, I require a [percentage]% deposit, with the remaining balance due before final files are delivered.\n\nOnce the deposit is received, I will begin the first concept round.'],
['Respond to “that’s too expensive”','I completely understand. If the full scope is more than you were hoping to spend right now, we can simplify the deliverables to better fit your budget.\n\nI want to make sure the project still feels thoughtful and sustainable, so I would rather adjust the scope than rush or undercut the work.'],
['Set revision boundaries','This project includes [number] rounds of revisions. After that, additional revisions are billed at $[rate]/hour or quoted separately depending on the change.\n\nThat keeps the process clear and helps make sure we stay aligned with the original scope.'],
['Politely decline a bad fit','Thank you so much for thinking of me. After looking over the project, I do not think I am the best fit for what you need right now.\n\nI really appreciate you reaching out and wish you the best with it.'],
['Follow up on unpaid invoice','Hi [Name],\n\nJust following up on invoice [invoice number], which was due on [date]. Whenever you have a chance, please let me know when I can expect payment.\n\nThank you!']
];

var examples=[
['Logo design','$250-$5,000+','A simple logo for a tiny personal project may be a few hundred dollars. A full logo system for a business with commercial usage should be much higher.'],
['Children’s book illustration','$100-$300+ per page','Page rates vary by style, detail, rights, and page count. Full books should include character development, revisions, and final file prep.'],
['Brand identity','$650-$9,000+','A brand kit may include logo, palette, typography, social templates, and guidelines. Larger businesses should pay more for broader usage.'],
['Website design','$800-$12,000+','Pricing depends on pages, platform, copy, build complexity, SEO, and whether you are providing design only or full implementation.'],
['Custom illustration','$180-$2,800+','Consider detail level, usage rights, turnaround, number of concepts, and whether the client needs commercial licensing.'],
['Social media templates','$150-$3,000+','Small template packs are lower cost. Larger content systems with brand strategy, captions, and multiple formats should cost more.']
];

var prompts={
logo:{
calm:['Explore a quiet symbol with soft geometry, generous spacing, and one memorable negative-space detail.','Create a wordmark direction with subtle custom letter changes instead of a complicated icon.','Try a mark inspired by one natural element, simplified until it feels almost effortless.'],
playful:['Sketch a friendly mascot-adjacent mark that feels charming but not childish.','Create three icon ideas using rounded shapes, imperfect symmetry, and a small unexpected detail.','Try a hand-drawn wordmark with one letter doing something memorable.'],
premium:['Use restrained typography, one elegant symbol, and a palette with no more than two main colors.','Explore a monogram or abstract mark that would still work embossed, stamped, or very small.','Create a direction that feels expensive because it is simple, not because it is decorative.'],
earthy:['Build around an organic line, natural texture, or botanical-inspired shape without becoming too literal.','Try a grounded palette and a mark that feels handmade but still clean.','Create a logo direction that could live on paper packaging, linen, or a small shop sign.'],
bold:['Create a high-contrast mark with one strong silhouette that is recognizable from far away.','Try an oversized wordmark treatment with a small icon detail for balance.','Make one concept that is intentionally simple enough to be remembered after one glance.']
},
illustration:{
calm:['Use a limited palette, lots of breathing room, and a soft focal point.','Create a composition where the quiet negative space is part of the feeling.','Try a gentle scene that suggests emotion through posture, light, or environment.'],
playful:['Push the proportions slightly and add one visual joke or charming small detail.','Create a scene with movement, character, and an object that tells a tiny story.','Try three thumbnail compositions before choosing the most expressive one.'],
premium:['Use fewer elements, stronger composition, and refined contrast.','Create a polished editorial direction with intentional texture and controlled detail.','Let the concept do more work than decoration.'],
earthy:['Bring in organic shapes, natural textures, and a palette that feels sun-warmed or grounded.','Create a scene inspired by plants, animals, landscape, or slow living.','Try a hand-rendered texture that makes the piece feel tactile.'],
bold:['Choose one strong focal shape and build the composition around it.','Use scale contrast: make one element unexpectedly large or close.','Try a poster-like layout with clear hierarchy and graphic impact.']
},
social:{calm:['Create a carousel with one idea per slide, quiet spacing, and minimal copy.','Use a soft background, one strong headline, and a simple closing prompt.','Make the post feel like a deep breath, not an announcement.'],playful:['Use a simple recurring character, sticker-like detail, or cheeky headline.','Create a list post with charming labels and a casual tone.','Make one slide visually unexpected so it feels shareable.'],premium:['Use minimal copy, editorial spacing, and one refined visual detail.','Create a post that feels like a page from a tasteful magazine.','Use a restrained palette and let the headline carry the confidence.'],earthy:['Use natural textures, warm neutrals, and imperfect shapes.','Create a post that feels handmade but still organized.','Use a photo crop or illustration detail that feels grounded and human.'],bold:['Use a strong headline, large type, and a clear point of view.','Make the first slide impossible to ignore but keep the rest clean.','Use contrast and scale instead of clutter.']},
product:{calm:['Create a design someone would want to live with every day, not just notice once.','Use a small motif, thoughtful placement, and a quiet color story.','Try a design that feels giftable, useful, and not overly trendy.'],playful:['Create a design with a tiny phrase, character, or icon that feels collectible.','Try a pattern with imperfect spacing and one surprise element.','Make the design feel like it has a personality without becoming too niche.'],premium:['Use fewer elements, better spacing, and a restrained palette.','Create a design that could work on packaging, apparel, and a small tag.','Focus on proportion and material compatibility.'],earthy:['Use botanical, animal, landscape, or natural texture references in a simplified way.','Try a warm palette and a design that feels handmade but elevated.','Create a motif that could become a repeat pattern.'],bold:['Make one simple graphic element oversized and memorable.','Use high contrast and strong placement rather than lots of detail.','Create a design that reads clearly from across a room.']},
website:{calm:['Create a homepage with one clear promise, soft hierarchy, and fewer choices.','Use generous spacing and one warm human detail to build trust.','Make the page feel easy to understand in the first five seconds.'],playful:['Add small moments of charm through microcopy, icons, or section names.','Create a homepage that feels approachable without losing clarity.','Use a friendly visual system that makes boring information easier to digest.'],premium:['Use editorial spacing, restrained type, and fewer but stronger sections.','Make the offer feel high-trust through clarity, not hype.','Create a page that feels considered from top to bottom.'],earthy:['Use natural texture, warm neutrals, and grounded language.','Build sections that feel calm, tactile, and easy to move through.','Use subtle organic shapes without hurting readability.'],bold:['Open with a strong headline and one unmistakable call to action.','Use scale, contrast, and clear sections to create momentum.','Make the page feel decisive, not busy.']}
};

function el(id){return document.getElementById(id);}
function money(value){return '$'+Math.round(value).toLocaleString();}

function showToast(message){
  var toast=el('toast');
  toast.textContent=message;
  toast.classList.add('show');
  setTimeout(function(){toast.classList.remove('show');},1600);
}

function copyText(text,message){
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){showToast(message);}).catch(function(){showToast('Copy failed');});
  }else{
    var area=document.createElement('textarea');
    area.value=text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    showToast(message);
  }
}

function switchTab(tabName){
  var panels=document.querySelectorAll('.panel');
  var buttons=document.querySelectorAll('[data-tab]');
  for(var i=0;i<panels.length;i++){
    panels[i].classList.toggle('active',panels[i].id===tabName);
  }
  for(var j=0;j<buttons.length;j++){
    buttons[j].classList.toggle('active',buttons[j].getAttribute('data-tab')===tabName);
  }
  el('tool').scrollIntoView({behavior:'smooth',block:'start'});
}

function calculatePricing(){
  var type=el('workType').value;
  var data=pricingData[type];
  var base=data[state.scope];
  var exp={beginner:.78,intermediate:1,experienced:1.45,premium:2.1}[state.experience];
  var client={individual:1,smallBusiness:1.18,funded:1.55}[state.client];
  var timeline={normal:1,rush:1.25}[state.timeline];
  var low=Math.round(base[0]*exp*client*timeline/10)*10;
  var high=Math.round(base[1]*exp*client*timeline/10)*10;
  var depositLow=Math.round(low*.5/10)*10;
  var depositHigh=Math.round(high*.5/10)*10;
  state.lastLow=low;
  state.lastHigh=high;
  state.lastSummary=data.label+': '+money(low)+'-'+money(high)+'. '+data.summary;
  el('priceRange').textContent=money(low)+'-'+money(high);
  el('priceSummary').textContent=data.summary;
  el('depositAmount').textContent=money(depositLow)+'-'+money(depositHigh);
  el('rushFee').textContent=state.timeline==='rush'?'Included: +25%':'Not included';
  el('revisionNote').textContent=data.revisions;
  var notes={beginner:'If you are newer, keep the scope especially clear. A lower price should still have boundaries.',intermediate:'This is a healthy middle range. Do not lower it without reducing the scope.',experienced:'Your experience has value. Price for judgment, taste, communication, and reliability — not just time.',premium:'Premium pricing needs premium clarity: usage rights, polished process, strong presentation, and firm boundaries.'};
  el('confidenceNote').textContent=notes[state.experience];
}

function updateInvoice(){
  var amount=Number(el('invoiceAmount').value||0);
  var today=new Date().toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'});
  el('previewBusiness').textContent=el('businessName').value||'Your Business Name';
  el('previewEmail').textContent=el('businessEmail').value||'hello@example.com';
  el('previewClient').textContent=el('clientName').value||'Client Name';
  el('previewInvoiceNumber').textContent=el('invoiceNumber').value||'INV-001';
  el('previewDescription').textContent=el('projectDescription').value||'Project description';
  el('previewAmount').textContent=money(amount);
  el('previewTotal').textContent=money(amount);
  el('previewDate').textContent=today;
  el('previewDueDate').textContent=el('dueDate').value||'—';
  el('previewPaymentNotes').textContent=el('paymentNotes').value||'Payment accepted via Zelle, bank transfer, or credit card. Thank you!';
}

function renderScripts(){
  var grid=el('scriptsGrid');
  grid.innerHTML='';
  scriptItems.forEach(function(item){
    var card=document.createElement('article');
    card.className='script-card';
    var h=document.createElement('h3');
    h.textContent=item[0];
    var t=document.createElement('div');
    t.className='script-text';
    t.textContent=item[1];
    var row=document.createElement('div');
    row.className='cta-row';
    row.style.marginTop='12px';
    var b=document.createElement('button');
    b.type='button';
    b.className='btn secondary small';
    b.textContent='Copy script';
    b.addEventListener('click',function(){copyText(item[1],'Script copied');});
    row.appendChild(b);
    card.appendChild(h);
    card.appendChild(t);
    card.appendChild(row);
    grid.appendChild(card);
  });
}

function renderExamples(){
  var grid=el('examplesGrid');
  grid.innerHTML='';
  examples.forEach(function(item){
    var card=document.createElement('article');
    card.className='example-card';
    card.innerHTML='<h3>'+item[0]+'</h3><p style="font-size:1.45rem;color:var(--ink);font-family:Georgia,serif;letter-spacing:-.05em;margin:8px 0;">'+item[1]+'</p><p>'+item[2]+'</p>';
    grid.appendChild(card);
  });
}

function generatePrompts(){
  var type=el('promptType').value;
  var mood=el('promptMood').value;
  var audience=el('promptAudience').value||'this client';
  var list=prompts[type][mood];
  var output=el('promptOutput');
  output.innerHTML='<h3>Starting directions for '+audience+'</h3>';
  var ol=document.createElement('ol');
  ol.className='prompt-list';
  list.forEach(function(prompt){
    var li=document.createElement('li');
    li.textContent=prompt;
    ol.appendChild(li);
  });
  output.appendChild(ol);
  var note=document.createElement('div');
  note.className='locked-note';
  note.textContent='Want a more complete direction? The paid pack can include expanded prompts, palette ideas, composition notes, and client presentation language.';
  output.appendChild(note);
  var row=document.createElement('div');
  row.className='cta-row';
  row.style.marginTop='14px';
  var button=document.createElement('button');
  button.type='button';
  button.className='btn secondary small';
  button.textContent='Copy prompts';
  button.addEventListener('click',function(){
    copyText('Creative directions for '+audience+':\\n\\n'+list.join('\\n'),'Prompts copied');
  });
  row.appendChild(button);
  output.appendChild(row);
}

function init(){
  document.querySelectorAll('[data-tab]').forEach(function(button){
    button.addEventListener('click',function(){switchTab(button.getAttribute('data-tab'));});
  });

  document.querySelectorAll('.pill').forEach(function(button){
    button.addEventListener('click',function(){
      var group=button.parentElement.getAttribute('data-group');
      button.parentElement.querySelectorAll('.pill').forEach(function(pill){pill.classList.remove('active');});
      button.classList.add('active');
      state[group]=button.getAttribute('data-value');
      calculatePricing();
    });
  });

  el('workType').addEventListener('change',calculatePricing);
  el('calculateBtn').addEventListener('click',calculatePricing);
  el('copyPricing').addEventListener('click',function(){
    copyText(state.lastSummary+' Suggested deposit: '+el('depositAmount').textContent+'. Revisions: '+el('revisionNote').textContent+'.','Pricing copied');
  });
  el('useForInvoice').addEventListener('click',function(){
    var midpoint=Math.round((state.lastLow+state.lastHigh)/2/10)*10;
    var type=el('workType').value;
    el('invoiceAmount').value=midpoint;
    el('projectDescription').value=pricingData[type].label+' project. Includes agreed deliverables and '+pricingData[type].revisions+' of revisions.';
    updateInvoice();
    switchTab('invoice');
  });

  ['businessName','businessEmail','clientName','invoiceNumber','projectDescription','invoiceAmount','dueDate','paymentNotes'].forEach(function(idName){
    el(idName).addEventListener('input',updateInvoice);
  });

  el('updateInvoice').addEventListener('click',updateInvoice);
  el('printInvoice').addEventListener('click',function(){updateInvoice();window.print();});
  el('copyInvoiceEmail').addEventListener('click',function(){
    updateInvoice();
    var client=el('clientName').value||'[Client Name]';
    var invoiceNumber=el('invoiceNumber').value||'INV-001';
    var amount=money(Number(el('invoiceAmount').value||0));
    var due=el('dueDate').value||'[due date]';
    copyText('Hi '+client+',\\n\\nI have attached invoice '+invoiceNumber+' for '+amount+'. Payment is due by '+due+'.\\n\\nThank you again — I appreciate it!','Invoice email copied');
  });
  el('proToggle').addEventListener('change',function(){
    el('invoicePreview').classList.toggle('pro',this.checked);
    if(this.checked)showToast('Pro style preview on');
  });
  el('paidPackLink').addEventListener('click',function(){showToast('Add your payment link here');});
  el('generatePrompts').addEventListener('click',generatePrompts);

  renderScripts();
  renderExamples();
  calculatePricing();
  updateInvoice();
  showToast('Tools loaded');
}

document.addEventListener('DOMContentLoaded',init);
