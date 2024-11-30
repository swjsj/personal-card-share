'use client';
import React, { useState, useRef } from 'react';

interface InputPanelProps {
  onGenerate: (text: string, avatarUrl: string | null, qrCodeUrl: string | null) => void;
}

const InputPanel: React.FC<InputPanelProps> = ({ onGenerate }) => {
  const [inputText, setInputText] = useState('善忘简介：自07年投身技术行业，自诩为前端中后端最强，后端中运维最强，运维中前端最强的全栈工程师。涉足管理领域，但技术始终是我的热情所在。今年，我重返公众号“善忘技术夹@swjsj.com”，分享经过亲身体验、能提升工作效率的实用软件。作为终身学习者，我致力于用技术改变世界，让我们一起探索技术的魅力。');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [qrCodeFile, setQrCodeFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>('/images/avatar.png');
  const [qrCodePreview, setQrCodePreview] = useState<string | null>('/images/qrcode.jpg');
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const qrCodeInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(inputText, avatarPreview, qrCodePreview);
  };

  const handleFileChange = (setter: React.Dispatch<React.SetStateAction<File | null>>, previewSetter: React.Dispatch<React.SetStateAction<string | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setter(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        previewSetter(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert('请上传图片文件');
    }
  };

  return (
    <div className="bg-white md:p-6 p-2 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">个人信息输入</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-1">
            个人简介
          </label>
          <textarea
            id="text-input"
            className="w-full h-48 p-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='张三，28岁，来自北京。一名全栈开发工程师，5年工作经验。擅长React、Node.js和Python。目前在一家AI创业公司担任技术负责人，正在开发一款智能个人助理应用。我热爱编程，同时也喜欢健身和旅行。我的座右铭是"持续学习，不断创新"。'
          />
        </div>
        <div>
          <label htmlFor="avatar-input" className="block text-sm font-medium text-gray-700 mb-1">
            上传头像
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="avatar-input"
              ref={avatarInputRef}
              onChange={handleFileChange(setAvatarFile, setAvatarPreview)}
              className="hidden"
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => avatarInputRef.current?.click()}
              className="px-4 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              选择头像
            </button>
            <span className="text-sm text-gray-600">{avatarFile?.name || '未选择文件'}</span>
          </div>
          {avatarPreview && (
            <div className="mt-2">
              <img src={avatarPreview} alt="Avatar Preview" className="w-32 h-32 rounded-full object-cover border-2 border-gray-300" />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="qrcode-input" className="block text-sm font-medium text-gray-700 mb-1">
            上传二维码
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="qrcode-input"
              ref={qrCodeInputRef}
              onChange={handleFileChange(setQrCodeFile, setQrCodePreview)}
              className="hidden"
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => qrCodeInputRef.current?.click()}
              className="px-4 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              选择二维码
            </button>
            <span className="text-sm text-gray-600">{qrCodeFile?.name || '未选择文件'}</span>
          </div>
          {qrCodePreview && (
            <div className="mt-2">
              <img src={qrCodePreview} alt="QR Code Preview" className="w-32 h-32 object-cover border-2 border-gray-300" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          生成名片
        </button>
      </form>
    </div>
  );
};

export default InputPanel;