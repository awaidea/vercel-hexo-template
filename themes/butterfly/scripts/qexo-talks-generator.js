const axios = require('axios');
const { parse } = require('node-html-parser');

hexo.extend.generator.register('qexo_talks', async function() {
  try {
    const response = await axios.get('https://panel.catp.cc/api/public/talks');
    const talks = response.data.sort((a, b) => new Date(b.created) - new Date(a.created));

    let timelineContent = `{% timeline 我的说说,blue %}\n`;

    talks.forEach(talk => {
      const date = new Date(talk.created).toLocaleDateString();
      timelineContent += `<!-- timeline ${date} -->\n`;
      
      // 处理内容中的图片（假设图片以Markdown格式嵌入）
      const root = parse(talk.content);
      const images = root.querySelectorAll('img');
      
      let content = talk.content;
      
      // 如果有图片，使用Butterfly的gallery标签
      if (images.length > 0) {
        content += `\n{% gallery %}\n`;
        images.forEach(img => {
          content += `${img.getAttribute('src')}\n`;
        });
        content += `{% endgallery %}\n`;
      }

      timelineContent += `${content}\n`;
      timelineContent += `<!-- endtimeline -->\n\n`;
    });

    timelineContent += `{% endtimeline %}`;

    return {
      path: 'talks/index.html',
      data: {
        title: '说说时间线',
        type: 'talks',
        content: timelineContent
      },
      layout: ['page']
    };
  } catch (error) {
    console.error('Error:', error);
    return {};
  }
});
