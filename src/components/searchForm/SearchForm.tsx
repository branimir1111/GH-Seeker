import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      toast.warning('Please enter a valid username', {
        style: {
          '--normal-bg': 'var(--background)',
          '--normal-text':
            'light-dark(var(--color-amber-600), var(--color-amber-400))',
          '--normal-border':
            'light-dark(var(--color-amber-600), var(--color-amber-400))',
        } as React.CSSProperties,
      });
      return;
    }
    setUserName(text);
  };
  return (
    <form onSubmit={handleSearch} className="w-full mb-8">
      <div className="w-full space-y-2">
        <Label htmlFor="userName">Enter Username</Label>
        <div className="flex rounded-md shadow-xs">
          <Input
            id="userName"
            type="text"
            placeholder="Seek GH Users..."
            className="-me-px rounded-r-none shadow-none focus-visible:z-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit" className="rounded-l-none cursor-pointer">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
