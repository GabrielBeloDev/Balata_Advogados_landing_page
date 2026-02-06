import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const caseTypes = [
  "Crimes contra Administração Pública",
  "Crimes de Violência Doméstica",
  "Tráfico de Drogas",
  "Crimes contra o Patrimônio (Roubo/Furto)",
  "Crimes contra a Vida (Tribunal do Júri)",
  "Crimes Ambientais",
  "Crimes Eleitorais",
  "Outro",
];

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedCase?: string;
}

const ContactModal = ({ open, onOpenChange, preSelectedCase }: ContactModalProps) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipoCaso, setTipoCaso] = useState(preSelectedCase || "");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (preSelectedCase) {
      setTipoCaso(preSelectedCase);
    }
  }, [preSelectedCase]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !telefone) {
      alert("Por favor, preencha nome e telefone.");
      return;
    }

    const mensagem = `*Novo contato via site*

*Nome:* ${nome}
*Telefone:* ${telefone}
*Tipo de caso:* ${tipoCaso || "Não informado"}
*Descrição:* ${descricao || "Não informada"}`;

    const whatsappUrl = `https://wa.me/5598988877011?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, "_blank");

    setNome("");
    setTelefone("");
    setTipoCaso("");
    setDescricao("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-md mx-auto bg-gradient-to-br from-orange-500 via-red-500 to-red-600 border-none shadow-2xl rounded-2xl">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl sm:text-2xl font-serif text-white text-center drop-shadow-md">
            Fale sobre seu caso
          </DialogTitle>
          <DialogDescription className="text-white/90 text-center text-sm sm:text-base">
            Preencha os dados e respondemos pelo WhatsApp
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="nome" className="text-white font-semibold text-sm sm:text-base">
              Nome *
            </Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="bg-white/95 border-white/50 focus:border-white text-gray-900 placeholder:text-gray-500 h-10 sm:h-11"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="telefone" className="text-white font-semibold text-sm sm:text-base">
              Telefone *
            </Label>
            <Input
              id="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              className="bg-white/95 border-white/50 focus:border-white text-gray-900 placeholder:text-gray-500 h-10 sm:h-11"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="tipoCaso" className="text-white font-semibold text-sm sm:text-base">
              Tipo de Caso
            </Label>
            <Select value={tipoCaso} onValueChange={setTipoCaso}>
              <SelectTrigger className="bg-white/95 border-white/50 text-gray-900 h-10 sm:h-11">
                <SelectValue placeholder="Selecione o tipo de caso" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {caseTypes.map((type) => (
                  <SelectItem key={type} value={type} className="text-gray-900">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="descricao" className="text-white font-semibold text-sm sm:text-base">
              Descrição do Caso
            </Label>
            <Textarea
              id="descricao"
              placeholder="Descreva brevemente sua situação..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={2}
              className="bg-white/95 border-white/50 focus:border-white text-gray-900 placeholder:text-gray-500 resize-none text-sm sm:text-base"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all rounded-xl"
          >
            <WhatsAppIcon className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            Enviar pelo WhatsApp
            <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
